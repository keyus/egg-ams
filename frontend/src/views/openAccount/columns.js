export const columns = [{
    title: '编号',
    dataIndex: 'id',
    width: '80px',
},{
    title: '开户时间',
    dataIndex: 'create_time',
    width: '200px',
    scopedSlots: {customRender: 'create_time'}
},{
    title: '状态',
    dataIndex: 'status',
    width: '100',
    scopedSlots: {customRender: 'status'}
},{
    title: '姓名',
    dataIndex: 'name',
    width: '100px',
},{
    title: '会员手机号',
    dataIndex: 'memberPhone',
    width: '150px',
},{
    title: '交易商',
    dataIndex: 'platformName',
    width: '200px',
},{
    title: '身份证照片1',
    dataIndex: 'idcardImg1',
    width: '200px',
},{
    title: '身份证照片2',
    dataIndex: 'idcardImg2',
    width: '200px',
},{
    title: '身份证照片1',
    dataIndex: 'idcardImg1',
    width: '200px',

},{
    title: '手持身份证照片',
    dataIndex: 'idcardHandImg',
    width: '200px',

},{
    title: '银行卡照片1',
    dataIndex: 'bankImg1',
    width: '200px',

},{
    title: '银行卡照片2',
    dataIndex: 'bankImg2',
    width: '200px',

},{
    title: '其它资料1',
    dataIndex: 'img1',
    width: '200px',

},{
    title: '其它资料2',
    dataIndex: 'img2',
    width: '200px',

},{
    title: '其它资料3',
    dataIndex: 'img3',
    width: '200px',

},{
    title: '其它资料4',
    dataIndex: 'img4',
    width: '200px',

},{
    title: '其它资料5',
    dataIndex: 'img5',
    width: '200px',

},];
