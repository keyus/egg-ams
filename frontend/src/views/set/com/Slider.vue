<template>
    <div>
        <div class="search">
            <a-button-group>
                <a-button type="primary" icon="plus" />
            </a-button-group>
        </div>
        <a-list
                class="demo-loadmore-list"
                :loading="loading"
                itemLayout="horizontal"
                :dataSource="data"
        >
            <a-list-item slot="renderItem" slot-scope="item, index">
                <a slot="actions"><a-icon type="edit" /> 编辑</a>
                <a slot="actions"><a-icon type="delete" /> 删除</a>
                <a-list-item-meta
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                    <a slot="title" href="https://vue.ant.design/">{{item.name.last}}</a>
                    <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </a-list-item-meta>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>
    import reqwest from 'reqwest'
    const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'
    export default {
        name: "Slider",
        data(){
            return {
                loading: true,
                data: [],
            }
        },
        mounted(){
            this.getData((res) => {
                this.loading = false
                this.data = res.results
            })
        },
        methods:{
            getData  (callback) {
                reqwest({
                    url: fakeDataUrl,
                    type: 'json',
                    method: 'get',
                    contentType: 'application/json',
                    success: (res) => {
                        callback(res)
                    },
                })
            },
        }
    }
</script>
