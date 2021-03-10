export const _fetch = (config: {
	/**
	 * 请求地址
	 */
	url: string
	/**
	 * 请求方式
	 */
	method: 'GET' | 'POST' | 'DELETE' | 'PUT'
}) => {
	const { url, method } = config
	const myRequest = new Request(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		mode: 'cors',
		cache: 'default'
	});

	return new Promise((resolve, reject)=>{
		fetch(myRequest).then(function (response) {
			return response.json();
		}).then(function (response) {
			console.log('真正的response', response)
			resolve(response)
		}).catch((err)=>{
			console.error('err', err)
			reject(err)
		})
	})
}
