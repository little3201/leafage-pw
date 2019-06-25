const columns = [
  {
    title: '用户ID',
    dataIndex: 'userId',
    sorter: true,
    width: '20%'
  }, {
    title: '中文名',
    dataIndex: 'usrNameCn',
    scopedSlots: { customRender: 'usrNameCn' }
  }, {
    title: '英文名',
    dataIndex: 'usrNameEn'
  }, {
    title: '电话号码',
    dataIndex: 'userMobile'
  }, {
    title: '联系地址',
    dataIndex: 'userAddress'
  }, {
    title: '邮箱',
    dataIndex: 'userEmail'
  }];