import {setStore, getStore} from '../config/mUtils'

import {baseUrl, imgBaseUrl} from '../config/env'

import {
	ACCOUNT,
} from './mutation-types.js'

export default {
	//登录用户
	[ACCOUNT](state, account){
		state.account = account
	},

}
