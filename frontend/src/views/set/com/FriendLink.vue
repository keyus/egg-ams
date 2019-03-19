<template>
    <div>
        <div class="search">
            <a-button-group>
                <a-button type="primary" icon="plus" />
            </a-button-group>
        </div>
        <a-list
                :grid="{ gutter: 16, column: 4 }"
                :dataSource="data"
        >
            <a-list-item slot="renderItem" slot-scope="item, index">
                <a-card :title="item.title">
                    Card content
                    <a slot="actions"><a-icon type="delete" /></a>
                    <a slot="actions"><a-icon type="edit" /></a>
                </a-card>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>
    const data = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
    ]
    export default {
        name: "FriendLink",
        data () {
            return {
                data,
            }
        },
    }
</script>
