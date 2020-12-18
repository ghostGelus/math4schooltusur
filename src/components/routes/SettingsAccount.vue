<template>
	<div class='route_container'>
		<confirm-modal
			v-model='showConfirmModal'
			@confirm='deleteAccount'
			color='red'
			text='Да, удалить'
		>
			Вы действительно хотите удалить аккаунт?
		</confirm-modal>

		<div class='h1'>Настройки пользователя</div>
		<div>
			<div class='h3'>Поменяйте свой пароль</div>
			<p class='p--condensed'>
				Для безопасности введите текущий пароль
			</p>
			<div>
				<fancy-input
					placeholder='Текущий пароль'
					v-model='password.current'
					:error='password.errors["current password"]'
					type='password'
				></fancy-input>
			</div>
			<div>
				<fancy-input
					placeholder='Новый пароль'
					v-model='password.new'
					:error='password.errors["new password"]'
					type='password'
				></fancy-input>
			</div>
			<loading-button
				class='button button--green'
				@click='savePassword'
				:loading='password.loading'
			>Изменить пароль</loading-button>
		</div>
		<!-- <div>
			<div class='h3 h3--margin_top'>Удалить аккаунт</div>
			<p class='p--condensed'>
				Удалив свой аккаунт вы <strong>не сможете</strong> его восстановить <br/>
			</p>
			<loading-button
				class='button button--red'
				:loading='deleteAccountLoading'
				@click='showConfirmModal = true'
			>Удалить аккаунт</loading-button>
		</div> -->
	</div>
</template>

<script>
	import FancyInput from '../FancyInput'
	import LoadingButton from '../LoadingButton'
	import ConfirmModal from '../ConfirmModal'

	import AjaxErrorHandler from '../../assets/js/errorHandler'
	import logger from '../../assets/js/logger'
	import { baseUrl } from '@/utils/helpers'

	export default {
		name: 'settingsAccount',
		components: {
			FancyInput,
			LoadingButton,
			ConfirmModal
		},
		data () {
			return {
				password: {
					loading: false,

					current: '',
					new: '',

					errors: {
						'new password': '',
						'current password': ''
					}
				},

				deleteAccountLoading: false,
				showConfirmModal: false
			}
		},
		computed: {},
		methods: {
			savePassword () {
				this.password.errors['current password'] = ''
				this.password.errors['new password'] = ''

				if(!this.password.current.length) {
					this.password.errors['current password'] = 'Заполните поле'
					return
				}
				if(!this.password.new.length) {
					this.password.errors['new password'] = 'Заполните поле'
					return
				}

				this.password.loading = true

				this.axios
					.put(baseUrl + '/api/v1/user/' + this.$store.state.username, {
						currentPassword: this.password.current,
						newPassword: this.password.new
					})
					.then(() => {
						this.password.loading = false

						this.password.current = ''
						this.password.new = ''
					})
					.catch(e => {
						this.password.loading = false

						console.log(e)

						AjaxErrorHandler(this.$store)(e, error => {
							if(error.path === 'hash') {
								this.password.errors['new password'] = error.message
							}
						})
					})
			},

			deleteAccount () {
				this.deleteAccountLoading = true

				this.axios
					.put(baseUrl + '/api/v1/user/' + this.$store.state.username)
					.then(() => {
						this.deleteAccountLoading = false

						this.$store.commit('setUsername', null)
						this.$router.push('/')
					})
					.catch(e => {
						this.deleteAccountLoading = false
						AjaxErrorHandler(this.$store)(e)
					})
			}
		},
		mounted () {
			this.$store.dispatch('setTitle', 'account settings')

			logger('settingsAccount')
		}
	}
</script>

<style lang='scss' scoped>
	@import '../../assets/scss/variables.scss';

	@media (max-width: $breakpoint--tablet) {
		.h1 {
			display: none;
		}
	}
</style>
