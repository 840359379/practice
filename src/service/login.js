import httpRequest from '../config/request';

class Login {
    async getLoginIndex(data) {
        return await httpRequest.get('login/verification',{params:data});
    }
}

export default new Login();