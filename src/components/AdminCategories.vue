<template>
	<div class='admin_categories'>
		<modal-window v-model='showAddModal' :loading='loading'>
			<div slot='main'>
				<p>Добавьте категорию</p>
				<fancy-input v-model='add.name' placeholder='Название категории'></fancy-input>
				<colour-picker v-model='add.color'></colour-picker>
			</div>
			<div slot='footer'>
				<button class='button button--modal button--green' @click='addCategory'>Добавить категорию</button>
				<button class='button button--modal' @click='toggleAddModal'>Отмена</button>
			</div>
		</modal-window>

		<modal-window v-model='showEditModal' :loading='loading'>
			<div slot='main'>
				<p>Изменить категорию</p>
				<fancy-input v-model='edit.name' placeholder='Название категории'></fancy-input>
				<colour-picker v-model='edit.color'></colour-picker>
			</div>
			<div slot='footer'>
				<button class='button button--modal button--green' @click='editCategory'>Изменить категорию</button>
				<button class='button button--modal' @click='toggleEditModal(null)'>Отмена</button>
			</div>
		</modal-window>

		<div class='category_widget__box'>
			<div class='category_widget__text'>
				<div class='category_widget__text__title'>Категории</div>
				Наведите указатель мыши, чтобы удалить или изменить категорию.
			</div>

			<transition-group name='slide'>
				<div
					class='admin_categories__category'
					v-for='(category, $index) in categories'
					:key='"category-box-" + category.id'
				>
					<div class='admin_categories__category__actions_holder'>
						<div class='admin_categories__category__actions'>
							<div
								class='admin_categories__category__action'
								@click='removeCateogry(category.id, $index)'
							>Удалить</div>
							<div
								class='admin_categories__category__action'
								@click='toggleEditModal(category, $index)'
							>Изменить</div>
						</div>
					</div>

					<div
						class='admin_categories__category__color'
						:style='{ "background-color": category.color }'
					></div>
					<div class='admin_categories__category__name'>{{category.name}}</div>
				</div>
			</transition-group>
			<div style="margin-top: 0.5rem;">
				<div class='admin_categories__category admin_categories__category--add' @click='toggleAddModal'>
					<div class='admin_categories__category__color'>
						<font-awesome-icon :icon='["fa", "plus"]' />
					</div>
					<div class='admin_categories__category__name'>Добавить новую категорию</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ModalWindow from './ModalWindow'
	import FancyInput from './FancyInput'
	import ColourPicker from './ColourPicker'
import { baseUrl } from '@/utils/helpers'
	import AjaxErrorHandler from '../assets/js/errorHandler'

	export default {
		name: 'AdminCategories',
		components: {
			ModalWindow,
			FancyInput,
			ColourPicker
		},
		data () {
			return {
				loading: false,
				showAddModal: false,
				showEditModal: false,

				add: {
					name: '',
					color: '#ffffff'
				},
				edit: {
					name: '',
					color: '#ffffff',
					id: null,
					index: null
				},

				categories: []
			}
		},
		methods: {
			toggleAddModal () {
				this.add.name = ''
				this.add.color = '#ffffff'
				this.showAddModal = !this.showAddModal
			},
			toggleEditModal (category, index) {
				if(category) {
					this.edit.name = category.name
					this.edit.color = category.color
					this.edit.id = category.id
					this.edit.index = index
				} else {
					this.edit.name = ''
					this.edit.color = '#ffffff'
					this.edit.id = null
					this.edit.index = null
				}

				this.showEditModal = !this.showEditModal
			},
			addCategory () {
				this.loading = true

				this.axios
					.post(baseUrl + '/api/v1/category', { name: this.add.name, color: this.add.color })
					.then(res => {
						this.toggleAddModal()
						this.loading = false
						this.categories.push(res.data)
						this.$store.commit('addCategories', res.data)
					})
					.catch(AjaxErrorHandler(this.$store))
			},
			removeCateogry (id, index) {
				this.axios
					.put(baseUrl + '/api/v1/category/' + id)
					.then(res => {
						this.categories.splice(index, 1)
						this.$store.commit('removeCategory', id)

						if(res.data.otherCategoryCreated) {
							this.$store.commit('addCategories', res.data.otherCategoryCreated)
						}
					})
					.catch(AjaxErrorHandler(this.$store))
			},
			editCategory () {
				this.loading = true

				this.axios
					.put(baseUrl + '/api/v1/category/' + this.edit.id ,{
						name: this.edit.name,
						color: this.edit.color
					})
					.then(res => {
						this.loading = false
						this.categories.splice(this.edit.index, 1, res.data)
						this.$store.commit('updateCategory', res.data)
						this.toggleEditModal()
					})
					.catch(AjaxErrorHandler(this.$store))
			}

		},
		mounted () {
			this.axios
				.get(baseUrl + '/api/v1/category')
				.then(res => {
					this.categories = res.data.filter(c => c.name !== 'Other')
				})
				.catch(AjaxErrorHandler(this.$store))
		}
	}
</script>

<style lang='scss' scoped>
	@import '../assets/scss/variables.scss';

	.slide-enter-active, .slide-leave-active, .slice-move {
		transition: all 1s;
	}
	.slide-enter, .slide-leave-to {
		opacity: 0;
	}

	.admin_categories {


		@at-root #{&}__category {
			display: inline-flex;
			position: relative;
			align-items: center;
			background-color: rgba($color__lightgray--primary, 0.5);
			justify-content: center;
			border-radius: 5rem;
			padding: 0.25rem 0.5rem 0.25rem 0.5rem;
			border: thin solid $color__gray--darker;
			margin-right: 0.5rem;
			margin-bottom: 0.5rem;
			transition: all 0.2s;
			cursor: default;

			&:hover {
				background-color: $color__lightgray--primary;

				& .admin_categories__category__actions_holder {
					opacity: 1;
					margin-top: 0;
					pointer-events: all;
				}
			}

			@at-root #{&}--add {
				top: -0.25rem;
				cursor: pointer;
			}

			@at-root #{&}__actions_holder {
				position: absolute;
				top: -2.25rem;
				opacity: 0;
				pointer-events: none;
				margin-top: 1rem;
				padding-bottom: 1rem;
				transition: all 0.2s;
			}
			@at-root #{&}__actions {
				border-radius: 3rem;
				border: thin solid $color__gray--darker;
				overflow: hidden;
				display: flex;
				background-color: #fff;
				box-shadow: 0 0.2rem 3px 0px rgba(224, 224, 224, 0.4);
			}
			@at-root #{&}__action {
				padding: 0.25rem 0.5rem;
				cursor: pointer;
				transition: all 0.2s;

				&:first-of-type {
					border-right: 0.1rem solid $color__gray--primary;
				}

				&:hover {
					background-color: $color__lightgray--primary;
				}
			}

			@at-root #{&}__color {
				height: 1.25rem;
				width: 1.25rem;
				border-radius: 100%;
				margin-left: 0rem;
				margin-right: 0.25rem;

				display: flex;
				align-items: center;
				justify-content: center;
			}

			@at-root #{&}__name {
				position: relative;
				bottom: 0.1rem;
			}
		}
	}
</style>
