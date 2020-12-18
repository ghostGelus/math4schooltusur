<template>
	<div class='admin_new_admin'>
		<modal-window v-model='showModal'>
			<div slot='main' style='padding-top: 1rem;'>
				<fancy-input
					:value='link'
					placeholder='Ссылка'
					width='100%'
					style='margin-bottom: 0.5rem;'
				></fancy-input>
			</div>
			<button
				class='button button--modal'
				slot='footer'
				@click='toggleModal'
			>
				OK
			</button>
		</modal-window>

		<div class='category_widget__box'>
			<div class='category_widget__text'>
				<div class='category_widget__text__title'>Добавьте нового администратора</div>
				Нажмите кнопку, чтобы сгенерировать ссылку для входа в новую учетную запись администратора - срок действия 24 часа
				<div v-if='!filteredAdmins'>Загрузка...</div>
				<div v-else>
					<strong v-if='filteredAdmins.length === 0'>Нет администраторов</strong>
					<template v-else>
						Текущие администраторы: Вы,
						<span v-for='(admin, $index) in filteredAdmins' :key='admin.username'>
							<router-link :to='"/user/" + admin.username'>{{admin.username}}</router-link>
							<template v-if='$index !== filteredAdmins.length-1'>,</template>
						</span>
					</template>
				</div>
			</div>
			<loading-button :loading='loading' @click='getLink'>Сгенерировать ссылку</loading-button>
		</div>
	</div>
</template>

<script>
	import ModalWindow from './ModalWindow'
	import FancyInput from './FancyInput'
	import LoadingButton from './LoadingButton'

	import AjaxErrorHandler from '../assets/js/errorHandler'
	import { baseUrl } from '@/utils/helpers'

	export default {
		name: 'AdminNewAdmin',
		components: {
			ModalWindow,
			FancyInput,
			LoadingButton
		},
		methods: {
			toggleModal () {
				this.showModal = !this.showModal
			},
			getLink () {
				this.axios
					.post(baseUrl + '/api/v1/admin_token')
					.then(res => {
						this.link = window.location.origin + '/?token=' + res.data.token
						this.toggleModal()
					})
					.catch(AjaxErrorHandler(this.$store))
			}
		},
		data () {
			return {
				loading: false,
				showModal: false,
				link: '',
				admins: null
			}
		},
		computed: {
			filteredAdmins () {
				if(!this.admins) {
					return null
				} else {
					return this.admins.filter(a => {
						return a.username !== this.$store.state.username
					})
				}
			}
		},
		created () {
			this.axios
				.get(baseUrl + '/api/v1/user?role=admin')
				.then(res => {
					this.admins = res.data
				})
				.catch(AjaxErrorHandler(this.$store))
		}
	}
</script>

<style lang='scss' scoped>
	@import '../assets/scss/variables.scss';

	@at-root .admin_new_admin {
		@at-root #{&}__modal {
			padding: 1rem;
		}
	}
</style>
