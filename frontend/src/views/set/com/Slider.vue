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
                    <a-card :title="item.alt">
                        <div class="slider-img" :style="{
                         backgroundImage: `url('${item.img}')`,
                        }">

                        </div>
                        <span slot="extra">
                        <i v-if="item.use">正常</i>
                        <i v-else  style="color: red">停用</i>
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
        <AddSlider :visible.sync="addVisible"
                  @put="update"/>
        <EditSlider :visible.sync="visible"
                   :data="editObject"
                   @put="update"/>
    </div>
</template>
<style>
    .slider-img{
        background-size: cover;
        background-repeat: no-repeat;
        height: 120px;
        margin: -24px;
    }
</style>
<script>
    import AddSlider from './AddSlider'
    import EditSlider from './EditSlider'

    export default {
        name: "Slider",
        components: {
            AddSlider,
            EditSlider,
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
                    const res = await this.$http.get('/slider');
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
                    await this.$http.delete(`/slider/${item.id}`);
                    this.fetch();
                } catch (e) {
                }
            }
        }
    }
</script>
