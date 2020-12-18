import axios from 'axios'
import { baseUrl } from '@/utils/helpers'
export default function (route, resourceId) {
	//In which case resourceId is really the username
	if(route === 'userPosts' || route === 'userThreads') {
		axios
			.get(baseUrl + '/api/v1/user/' + resourceId)
			.then(res => {
				return axios
					.post(baseUrl + '/api/v1/log', {
						route,
						resourceId: res.data.id
					})
			})
			.catch(console.log)
	} else {
		axios
			.post(baseUrl + '/api/v1/log', {
				route,
				resourceId
			})
			.catch(console.log)
	}


}
