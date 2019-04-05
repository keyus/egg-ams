<template>
    <div>
        <div class="search">
            <a-button-group>
                <a-button type="primary" @click="openAdd" icon="plus"/>
            </a-button-group>
        </div>
        <a-spin :spinning="loading">
            <a-list
                    :grid="{ gutter: 16, column: 4 }"
                    :dataSource="data"
            >
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-card :title="item.name">
                        <div style="display: flex;align-items: center">
                            <a-avatar size="large" :src="item.img" alt="logo">logo</a-avatar>
                            <div style="flex: 1;
                        min-width: 1%;
                        margin-left: 10px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden"
                                 :title="item.url">{{item.url}}
                            </div>
                        </div>
                        <span slot="extra">
                        <i v-if="item.refollow" style="color: red">屏蔽</i>
                        <i v-else>正常</i>
                    </span>
                        <a slot="actions" @click="deleteItem(item)">
                            <a-icon type="delete"/>
                        </a>
                        <a slot="actions">
                            <a-icon type="edit" @click="openEdit(item)"/>
                        </a>
                    </a-card>
                </a-list-item>
            </a-list>
        </a-spin>
        <AddLinks :visible.sync="addVisible"
                  @put="update"/>
        <EditLinks :visible.sync="visible"
                   :data="editObject"
                   @put="update"/>
    </div>
</template>

<script>
    import AddLinks from './AddLinks'
    import EditLinks from './EditLinks'

    export default {
        name: "FriendLink",
        components: {
            AddLinks,
            EditLinks,
        },
        data() {
            return {
                loading: false,
                data: [],
                visible: false,
                addVisible: false,
                editObject: {}
            }
        },
        created() {
            this.fetch();
        },
        methods: {
            async fetch() {
                this.loading = true;
                try {
                    const res = await this.$http.get('/friendlink');
                    this.data = res.data;
                    this.loading = false;
                } catch (e) {
                    this.loading = false;
                }
            },
            openEdit(item) {
                this.visible = true;
                this.editObject = item;
            },
            openAdd() {
                this.addVisible = true;
            },
            update() {
                this.fetch();
            },
            async deleteItem(item) {
                try {
                    await this.$http.delete(`/friendlink/${item.id}`);
                    this.fetch();
                } catch (e) {
                }
            }
        }
    }
</script>
