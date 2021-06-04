describe('App test resources', () => {

    describe('Promise API', () => {
        const axios = require('axios');
        jest.mock('axios');
        it('Should return promise API', () => {
            const resp = '?name=teste';
            axios.get.mockResolvedValueOnce(resp)
            return axios.get(resp).then(a => expect(a).toEqual('?name=teste'))
        })
    })

    describe('Should return result avatar', () => {
        const avatar = require('../js/avatar');
        const mock = jest.fn('../js/avatar')

        it('Should return function', () => {
            const result = 
                mock.mockImplementation(avatar.avatar())
                .getMockImplementation()
            expect(result).toBeDefined()
        })
        
    })

})