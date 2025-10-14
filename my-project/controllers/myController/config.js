module.exports = {
  name: 'myController',
  path: './main.js',
  handlers: {
    signup: {
      needProtocolRef: false,
      params: ['_protocolRef.request.postData'],
    },
    login: {
        needProtocolRef: false,
        // params: ['_protocolRef.request.postData.username', '_protocolRef.request.postData.password','_protocolRef.request.headers.token']
        params: ['_protocolRef.request.postData']
    },
    editUser: {
        needProtocolRef: false,
        params: ["_inputData.params.id", '_protocolRef.request.postData','_protocolRef.request.headers.token']
    },
    viewUser: {
        needProtocolRef: false,
        params: ["_inputData.params.id",'_protocolRef.request.headers.token']
    },
  }
};   
