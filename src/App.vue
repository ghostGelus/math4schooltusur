<template>
	<div id='app'>
		<modal-window v-model='showAjaxErrorsModal' style='z-index: 100' width='25rem' :no-padding='true'>
			<div slot='main'>
				<p :key='error' v-for='error in this.$store.state.ajaxErrors' style='margin: 1rem;'>{{error}}</p>
			</div>
			<button
				slot='footer'
				class='button button--modal'
				@click='showAjaxErrorsModal = false'
				ref='ajaxErrorsModalButton'
			>
				OK
			</button>
		</modal-window>
		<!-- <header class='header'>
			<div class='header__group'>
				<router-link class='logo' to='/'>{{name}}</router-link>
			</div>
			<div class='header__group' :class='{ "header__group--show": showMenu }'>
				<template v-if='$store.state.username'>
					<notification-button></notification-button>
					<router-link
						to='/admin'
						class='button button--thin_text'
						v-if='$store.state.admin'
					>
						Admin settings
					</router-link>
					<router-link
						to='/settings'
						class='button button--thin_text'
					>
						Settings
					</router-link>
					<loading-button
						@click='logout'
						:loading='loadingLogout'
						class='button--thin_text'
					>
						Log out
					</loading-button>
				</template>
				<template v-else>
					<div class='button button--green button--thin_text' @click='showAccountModalTab(0)'>
						Sign up
					</div>
					<div class='button button--thin_text' @click='showAccountModalTab(1)'>
						Login
					</div>
				</template>
				<search-box header-bar='true'></search-box>
			</div>
			<div class='header__overlay' :class='{ "header__overlay--show": showMenu }' @click='toggleMenu'></div>
			<span class='header__menu_button' @click='toggleMenu'>
				<font-awesome-icon :icon='["fa", "bars"]' />
			</span>
		</header> -->
		<not-found v-show='$store.state.show404Page'></not-found>

		<transition name='fade'>
			<router-view v-show='!$store.state.show404Page'></router-view>
		</transition>
	</div>
</template>

<script>
	import ModalWindow from './components/ModalWindow'
	// import NotificationButton from './components/NotificationButton'
	// import SearchBox from './components/SearchBox'

	import NotFound from './components/routes/NotFound'

	import AjaxErrorHandler from './assets/js/errorHandler'
	import { baseUrl } from '@/utils/helpers'

	export default {
		name: 'app',
		components: {
			ModalWindow,
			// NotificationButton,
			// SearchBox,
			NotFound
		},
		data () {
			return {
				signup: {
					username: '',
					password: '',
					confirmPassword: '',

					loading: false,

					errors: {
						username: '',
						hash: '',
						confirmPassword: ''
					}
				},
				login: {
					username: '',
					password: '',

					loading: false,

					errors: {
						username: '',
						hash: ''
					}
				},
				loadingLogout: false,
				showMenu: false,
				ajaxErrorHandler: AjaxErrorHandler(this.$store)
			}
		},
		computed: {
			name () {
				return this.$store.state.meta.name
			},
			showAccountModal: {
				get () { return this.$store.state.accountModal },
				set (val) {
					this.$store.commit('setAccountModalState', val);
				}
			},
			showAjaxErrorsModal: {
				get () { return this.$store.state.ajaxErrorsModal },
				set (val) { this.$store.commit('setAjaxErrorsModalState', val) }
			},
			showAccountTab : {
				get () { return this.$store.state.accountTabs },
				set (index) { this.$store.commit('setAccountTabs', index) }
			},
			categories() {
				return this.$store.state.meta.categories
			}
		},
		methods: {
			showAccountModalTab (index) {
				this.toggleMenu()
				this.showAccountModal = true
				this.showAccountTab = index
			},
			toggleMenu () {
				this.showMenu = !this.showMenu
			},
			logout () {
				this.toggleMenu()
				this.loadingLogout = true

				this.axios.post(baseUrl +
					'/api/v1/user/' +
					this.$store.state.username +
					'/logout'
				).then(res => {
					this.loadingLogout = false
					this.$store.commit('setUsername', '')
					this.$store.commit('setAdmin', res.data.admin)

					this.$router.push('/')
				}).catch(err => {
					this.loadingLogout = false
					this.ajaxErrorHandler(err)
				})
			},
			clearSignup () {
				this.signup.username = ''
				this.signup.password = ''
				this.signup.confirmPassword = ''

				this.$store.commit('setToken', null)
			},
			clearSignupErrors () {
				this.signup.errors.username = ''
				this.signup.errors.hash = ''
				this.signup.errors.confirmPassword = ''
			},
			clearLogin () {
				this.login.username = ''
				this.login.password = ''
			},
			clearLoginErrors () {
				this.login.errors.username = ''
				this.login.errors.hash = ''
			},
			closeAccountModal () {
				this.showAccountModal = false
				this.clearLogin()
				this.clearSignup()
				this.clearLoginErrors()
				this.clearSignupErrors()
			},
			createAccount () {
				this.clearSignupErrors()

				let postParams = {
					username: this.signup.username,
					password: this.signup.password
				}
				if(this.$store.state.token) {
					postParams.admin = true
					postParams.token = this.$store.state.token
				}

				if(this.signup.password !== this.signup.confirmPassword) {
					this.signup.errors.confirmPassword = 'Passwords must match'
				} else {
					this.signup.loading = true

					this.axios.post(baseUrl + '/api/v1/user', postParams).then(res => {
						this.signup.loading = false
						this.$store.commit('setUsername', res.data.username)
						this.$store.commit('setAdmin', res.data.admin)
						this.closeAccountModal()
					}).catch(e => {
						this.signup.loading = false

						this.ajaxErrorHandler(e, (error) => {
							let path = error.path

							if(this.signup.errors[path] !== undefined && this.signup.errors[path] !== undefined) {
								this.signup.errors[path] = error.message
							}
						})
					})
				}
			},
			doLogin () {
				this.clearSignupErrors()

				if(!this.login.username.trim().length) {
					this.login.errors.username = 'Username must not be blank'
					return
				}

				this.login.loading = true

				this.axios.post(baseUrl + `/api/v1/user/${this.login.username}/login`, {
					password: this.login.password
				}).then(res => {
					this.login.loading = false
					this.$store.commit('setUsername', res.data.username)
					this.$store.commit('setAdmin', res.data.admin)
					this.closeAccountModal()
				}).catch(e => {
					this.login.loading = false
					this.ajaxErrorHandler(e, (error) => {
						let path = error.path

						if(this.signup.errors[path] !== undefined && this.signup.errors[path] !== undefined) {
							this.signup.errors[path] = error.message
						}
					})
				})
			}
		},
		created () {
			this.$store.dispatch('setTitle', 'Математика с Факультетом безопасности');
			this.axios.get(baseUrl + '/api/v1/settings')
				.then(res => {
					this.$store.commit('setSettings', res.data)
					this.$store.dispatch('setTitle', this.$store.state.meta.title)
				}).catch(err => {
					if(err.response.data.errors[0].name === 'noSettings') {
						this.$router.push('/start')
					} else {

						this.ajaxErrorHandler(err)
					}
				})

			this.axios.get(baseUrl + '/api/v1/category')
				.then(res => {
					this.$store.commit('addCategories', res.data)

					//Need categories to have loaded to set
					//the title of the index page
					//but if we're on another page (i.e. title is not set)
					//don't overwrite the title
					if(!this.$store.state.meta.title.length && this.$route.params.category) {
						let selectedCategory = this.$route.params.category.toUpperCase()
						let category = this.categories.find(c => c.value === selectedCategory)

						this.$store.dispatch('setTitle', category.name)
					}
				})
				.catch(this.ajaxErrorHandler)
		},
		watch: {
			$route () {
				this.showMenu = false
			},
			'$store.state.ajaxErrorsModal': function(val) {
				if(val) {
					this.$refs.ajaxErrorsModalButton.focus()
				}
			}
		}
	}
</script>

<style lang='scss'>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
	@import './assets/scss/variables.scss';
	@import './assets/scss/elementStyles.scss';
	@import './assets/scss/nprogress.scss';
	@import './assets/css/bootstrap.css';

	html, body {
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Montserrat, "Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    // font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;

		color: $color__text--primary;
		@include text;
	}

	* {
		box-sizing: border-box;
	}

	.route_container {
		width: 80%;
		max-width: 1250px;
		margin: 0 auto;
		margin-top: 2rem;
		padding-bottom: 2rem;
	}

	#app {
		height: 100%;
	}
	a {
		text-decoration: none
	}

</style>
