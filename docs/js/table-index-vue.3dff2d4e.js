(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["table-index-vue","table-api-vue","table-examples-vue"],{"055a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("ui-component-title",{attrs:{slug:"w-table","in-progress":""}},[e._v("w-table")]),a("examples"),a("api")],1)},l=[],i=a("c9fb"),s=a("b2b1"),r={components:{Examples:i["default"],Api:s["default"]}},m=r,o=a("2877"),d=Object(o["a"])(m,n,l,!1,null,null,null);t["default"]=d.exports},b2b1:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),a("alert",{staticClass:"mb6",attrs:{info:""}},[e._v("The missing props descriptions will be added shortly (all the props are already listed).")]),a("component-api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),a("component-api",{attrs:{items:e.slots,title:"Slots"}}),a("component-api",{attrs:{items:e.events,title:"Events"}})],1)},l=[],i=(a("13d5"),a("efcf")),s={},r={"no-data":{description:"Provide a custom template when there is no data."},loading:{description:"Provide a custom loading template."},"header-label":{description:"Provide a custom header label template.",params:{label:"The label of the header being rendered.",header:"The full header object being rendered.",index:"The index of the header cell being rendered. Starts at 1."}},item:{description:"Provide a custom item template (each cell in each item row).",params:{item:"The full item object of to the row being rendered.",header:"The related header object of the current column of the cell being rendered.",label:"The content of the cell being rendered.",index:"The index of the cell in the row being rendered. Starts at 1."}}},m={},o={data:function(){return{propsDescs:s,slots:r}},computed:{props:function(){return i["a"].props},events:function(){return i["a"].emits.reduce((function(e,t){return(e[t]=m[t]||{})&&e}),{})}}},d=o,b=a("2877"),f=Object(b["a"])(d,n,l,!1,null,null,null);t["default"]=f.exports},c9fb:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("title-link",{attrs:{h2:""}},[e._v("Default")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-table\n  :headers="table.headers"\n  :items="table.items">\n</w-table>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' }\n    ]\n  }\n})\n")]},proxy:!0}])},[a("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items}})],1),a("title-link",{attrs:{h2:""}},[e._v("When there is no data")]),e._m(0),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-table :headers="table.headers" :items="[]"></w-table>\n\n<br />\n<w-table :headers="table.headers" :items="[]">\n  <template #no-data="">\n    👌 There is no data! 👌\n  </template>\n</w-table>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ]\n  }\n})\n")]},proxy:!0}])},[a("w-table",{attrs:{headers:e.table1.headers,items:[]}}),a("br"),a("w-table",{attrs:{headers:e.table1.headers,items:[]},scopedSlots:e._u([{key:"no-data",fn:function(){return[e._v("👌 There is no data! 👌")]},proxy:!0}])})],1),a("title-link",{attrs:{h2:""}},[e._v("Alignments")]),e._m(1),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-table\n  :headers="table.headers"\n  :items="table.items">\n</w-table>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName', align: 'center' },\n      { label: 'Last name', key: 'lastName', align: 'right' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' }\n    ]\n  }\n})\n")]},proxy:!0}])},[a("w-table",{attrs:{headers:e.table2.headers,items:e.table2.items}})],1),a("title-link",{attrs:{h2:""}},[e._v("No headers")]),e._m(2),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-table\n  :items="table.items"\n  :headers="table.headers"\n  no-headers>\n</w-table>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' }\n    ]\n  }\n})\n")]},proxy:!0}])},[a("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,"no-headers":""}})],1),a("title-link",{attrs:{h2:""}},[e._v("Fixed headers")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-table\n  :headers="table.headers"\n  :items="table.items"\n  fixed-headers\n  style="height: 250px">\n</w-table>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' },\n      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },\n      { id: 7, firstName: 'Beckah', lastName: 'Mann' },\n      { id: 8, firstName: 'Davie', lastName: 'Forester' },\n      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },\n      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },\n      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },\n      { id: 12, firstName: 'Sheree', lastName: 'Castle' },\n      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },\n      { id: 14, firstName: 'Maude', lastName: 'Hayley' },\n      { id: 15, firstName: 'Josie', lastName: 'Richard' }\n    ]\n  }\n})\n")]},proxy:!0}])},[a("w-table",{staticStyle:{height:"250px"},attrs:{headers:e.table3.headers,items:e.table3.items,"fixed-headers":""}})],1),a("title-link",{attrs:{h2:""}},[e._v("Initial Sorting")]),e._m(3),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-table\n  :headers="table.headers"\n  :items="table.items"\n  :sort.sync="table.sort">\n</w-table>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' }\n    ],\n    sort: '+firstName'\n  }\n})\n")]},proxy:!0}])},[a("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,sort:e.table1.sort},on:{"update:sort":function(t){return e.$set(e.table1,"sort",t)}}})],1),a("title-link",{attrs:{h2:""}},[e._v("Filter")]),e._m(4),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="w-flex wrap mb3">\n  <w-button\n    class="mr2 mb1"\n    @click="table.activeFilter = 0"\n    round\n    :outline="table.activeFilter !== 0">\n    No filter\n  </w-button>\n\n  <w-button\n    class="mr2 mb1"\n    @click="table.activeFilter = 1"\n    round\n    :outline="table.activeFilter !== 1">\n    Last name starting with \'M\'\n  </w-button>\n\n  <w-button\n    class="mr2 mb1"\n    @click="table.activeFilter = 2"\n    round\n    :outline="table.activeFilter !== 2">\n    ID >= 10\n  </w-button>\n</div>\n\n<w-table\n  :headers="table.headers"\n  :items="table.items"\n  :filter="table.filters[table.activeFilter]">\n</w-table>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' },\n      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },\n      { id: 7, firstName: 'Beckah', lastName: 'Mann' },\n      { id: 8, firstName: 'Davie', lastName: 'Forester' },\n      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },\n      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },\n      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },\n      { id: 12, firstName: 'Sheree', lastName: 'Castle' },\n      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },\n      { id: 14, firstName: 'Maude', lastName: 'Hayley' },\n      { id: 15, firstName: 'Josie', lastName: 'Richard' }\n    ],\n    filters: [\n      null,\n      item => item.lastName[0] === 'M',\n      item => item.id >= 10\n    ],\n    activeFilter: 0\n  }\n})\n")]},proxy:!0}])},[a("div",{staticClass:"w-flex wrap mb3"},[a("w-button",{staticClass:"mr2 mb1",attrs:{round:"",outline:0!==e.table3.activeFilter},on:{click:function(t){e.table3.activeFilter=0}}},[e._v("No filter")]),a("w-button",{staticClass:"mr2 mb1",attrs:{round:"",outline:1!==e.table3.activeFilter},on:{click:function(t){e.table3.activeFilter=1}}},[e._v("Last name starting with 'M'")]),a("w-button",{staticClass:"mr2 mb1",attrs:{round:"",outline:2!==e.table3.activeFilter},on:{click:function(t){e.table3.activeFilter=2}}},[e._v("ID >= 10")])],1),a("w-table",{attrs:{headers:e.table3.headers,items:e.table3.items,filter:e.table3.filters[e.table3.activeFilter]}})],1),a("title-link",{attrs:{h2:""}},[e._v("Loading state")]),e._m(5),a("w-button",{staticClass:"mb2",attrs:{disabled:e.table1.loading},on:{click:e.reload}},[a("w-icon",{staticClass:"mr1"},[e._v("mdi mdi-sync")]),e._v("reload")],1),a("title-link",{attrs:{h3:""}},[e._v("Simple table - no set height")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-table\n  :headers="table.headers"\n  :items="table.items"\n  :loading="table.loading">\n</w-table>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' }\n    ],\n    loading: true // Set this to false when the data is loaded.\n  }\n})\n")]},proxy:!0}])},[a("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,loading:e.table1.loading}})],1),a("title-link",{attrs:{h3:"",slug:"loading-with-fixed-header"}},[e._v("Table with fixed header & set height of 200px")]),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-table\n  :headers="table.headers"\n  :items="table.items"\n  fixed-headers\n  :loading="table.loading"\n  style="height: 200px">\n</w-table>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' },\n      { id: 6, firstName: 'Baldwin', lastName: 'Morison' },\n      { id: 7, firstName: 'Beckah', lastName: 'Mann' },\n      { id: 8, firstName: 'Davie', lastName: 'Forester' },\n      { id: 9, firstName: 'Andi', lastName: 'Montgomery' },\n      { id: 10, firstName: 'Magnolia', lastName: 'Kirk' },\n      { id: 11, firstName: 'Hamilton', lastName: 'Mallory' },\n      { id: 12, firstName: 'Sheree', lastName: 'Castle' },\n      { id: 13, firstName: 'Rebekah', lastName: 'Eason' },\n      { id: 14, firstName: 'Maude', lastName: 'Hayley' },\n      { id: 15, firstName: 'Josie', lastName: 'Richard' }\n    ],\n    loading: true // Set this to false when the data is loaded.\n  }\n})\n")]},proxy:!0}])},[a("w-table",{staticStyle:{height:"200px"},attrs:{headers:e.table1.headers,items:e.table3.items,"fixed-headers":"",loading:e.table1.loading}})],1),a("title-link",{attrs:{h2:""}},[e._v("Pagination")]),a("example",{scopedSlots:e._u([{key:"pug",fn:function(){},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' }\n    ]\n  }\n})\n")]},proxy:!0}])},[e._v("Coming soon.")]),a("title-link",{attrs:{h2:""}},[e._v("Rows selection")]),a("p",[e._v("Click a row to see it highlighted and get information about the selected item.")]),e._m(6),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-table\n  :headers="table.headers"\n  :items="table.items"\n  select-row\n  @row-select="table.selectedRow = $event">\n</w-table>\n\n<p class="mt4">\n  <strong>\n    Selected row:\n  </strong>\n\n  <span class="ml2">\n    '+e._s("{{ table.selectedRow || '-' }}")+"\n  </span>\n</p>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' }\n    ],\n    selectedRow: null\n  }\n})\n")]},proxy:!0}])},[a("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items,"select-row":""},on:{"row-select":function(t){e.selectedRow=t}}}),a("p",{staticClass:"mt4"},[a("strong",[e._v("Selected row:")]),a("span",{staticClass:"ml2"},[e._v(e._s(e.selectedRow||"-"))])])],1),a("title-link",{attrs:{h2:""}},[e._v("Expandable rows")]),a("example",[e._v("Coming soon.")]),a("title-link",{attrs:{h2:"",slug:"slots"}},[e._v("Headers & Cells customization via slots")]),a("p",[e._v("You can customize the headers labels and/or each row cells.")]),a("title-link",{attrs:{h3:""}},[e._v("Headers")]),e._m(7),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-table\n  :headers="table.headers"\n  :items="table.items">\n  <template #header-label="{ label, index }">\n    '+e._s("{{ index }}: {{ label }}")+" 👌\n  </template>\n</w-table>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' }\n    ]\n  }\n})\n")]},proxy:!0}])},[a("w-table",{attrs:{headers:e.table1.headers,items:e.table1.items},scopedSlots:e._u([{key:"header-label",fn:function(t){var a=t.label,n=t.index;return[e._v(e._s(n)+": "+e._s(a)+" 👌")]}}])})],1),a("title-link",{attrs:{h3:""}},[e._v("Items")]),e._m(8),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-table\n  :headers="table.headers"\n  no-headers\n  :items="table.items">\n  <template #item="{ item, label, header, index }">\n    <small class="grey mr2">'+e._s("{{ header.label }}")+":</span>\n    <span>"+e._s("{{ label }}")+"</span>\n  </template>\n</w-table>")]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' }\n    ]\n  }\n})\n")]},proxy:!0}])},[a("w-table",{attrs:{headers:e.table1.headers,"no-headers":"",items:e.table1.items},scopedSlots:e._u([{key:"item",fn:function(t){t.item;var n=t.label,l=t.header,i=t.index;return["id"===l.key?a("small",[e._v("#"+e._s(i))]):[a("small",{staticClass:"grey mr2"},[e._v(e._s(l.label)+":")]),a("span",[e._v(e._s(n))])]]}}])})],1),a("title-link",{attrs:{h2:""}},[e._v("Responsiveness & mobile layout")]),e._m(9),a("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-table\n  :headers="table.headers"\n  :items="table.items"\n  :mobile-breakpoint="700">\n</w-table>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName', align: 'center' },\n      { label: 'Last name', key: 'lastName', align: 'right' }\n    ],\n    items: [\n      { id: 1, firstName: 'Floretta', lastName: 'Sampson' },\n      { id: 2, firstName: 'Nellie', lastName: 'Lynn' },\n      { id: 3, firstName: 'Rory', lastName: 'Bristol' },\n      { id: 4, firstName: 'Daley', lastName: 'Elliott' },\n      { id: 5, firstName: 'Virgil', lastName: 'Carman' }\n    ]\n  }\n})\n")]},proxy:!0}])},[a("w-table",{attrs:{headers:e.table2.headers,items:e.table2.items,"mobile-breakpoint":700}})],1),a("alert",{attrs:{tip:""}},[a("p",[e._v("To stay lean and performant, the minimum JavaScript behavior is added to the "),a("code",[e._v("w-table")]),e._v("\ncomponent."),a("br"),e._v("\nOne thing that is not calculated on the mobile layout is the labels column width (default: 6.5em)."),a("br"),e._v("\nYou can override it to set the width you want via:\n")]),a("ssh-pre",{attrs:{language:"css",label:"CSS"}},[e._v(".w-table--mobile .w-table__cell:before {width: 8em;}")])],1)],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("When there is no data, a default text will be diplayed. You can override it via the "),a("code",[e._v("no-data")]),e._v(" slot.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("You can align the columns contents separately by adding an "),a("code",[e._v("align")]),e._v(" key in each header\ndefinition ("),a("code",[e._v("left")]),e._v(", "),a("code",[e._v("center")]),e._v(" or "),a("code",[e._v("right")]),e._v(")."),a("br"),e._v("\nIf you don't define any, "),a("code",[e._v("left")]),e._v(" will be implicit.\n")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Even with the "),a("code",[e._v("no-headers")]),e._v(" option, the "),a("code",[e._v("headers")]),e._v(" are still required for various\nreasons, like getting the number of columns and sorting/filtering keys.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("To make the sorting API very easy to use and remember (and avoid complex array or object structures),\nthe "),a("strong",{staticClass:"code"},[e._v("w-table")]),e._v("'s sorting is defined with a header key string preceded with a "),a("code",[e._v("+")]),e._v(" for ASC,\nor a "),a("code",[e._v("-")]),e._v(" for DESC. For instance, in this example: "),a("code",[e._v("'+firstName'")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Filtering the table rows is very straightforward: you only need to provide your filtering function to the\n"),a("strong",{staticClass:"code"},[e._v("w-table")]),e._v(" component and it will be applied to the table."),a("br"),e._v("\nSetting the filter to "),a("code",[e._v("null")]),e._v(" or "),a("code",[e._v("false")]),e._v(" or "),a("code",[e._v("undefined")]),e._v(" will remove any previous filter.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("When the table content is not ready straight away, you can use the "),a("code",[e._v("loading")]),e._v(" prop to display\na progress bar while loading.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("By default, the selection will use the "),a("code",[e._v("primary")]),e._v(" color and apply an opacity of "),a("code",[e._v("0.2")]),e._v(".\nIf this is not what you want, you can override it via CSS ("),a("code",[e._v(".w-table__row--selected td:before")]),e._v(").")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("In this example, only the headers are customized via the "),a("code",[e._v("header-label")]),e._v(" slot.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("In this example, only the items cells are customized via the "),a("code",[e._v("item")]),e._v(" slot\n(and the headers are hidden).")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("In addition to the full responsiveness, the "),a("code",[e._v("w-table")]),e._v(" can be presented in a mobile friendly layout,\nif the data it contains would not fit on mobile."),a("br"),e._v("\nYou can decide to trigger the mobile layout or not on each table, individually, via the "),a("code",[e._v("mobile-breakpoint")]),e._v("\nparameter."),a("br"),e._v("\nIt can be very useful when multiple tables of data are presented, with more or less content, which\nshould be displayed differently."),a("br"),a("br"),e._v("\nFor this example, resize your browser to 700px or less to trigger the mobile layout.\n")])}],i=(a("fb6a"),[{id:1,firstName:"Floretta",lastName:"Sampson"},{id:2,firstName:"Nellie",lastName:"Lynn"},{id:3,firstName:"Rory",lastName:"Bristol"},{id:4,firstName:"Daley",lastName:"Elliott"},{id:5,firstName:"Virgil",lastName:"Carman"},{id:6,firstName:"Baldwin",lastName:"Morison"},{id:7,firstName:"Beckah",lastName:"Mann"},{id:8,firstName:"Davie",lastName:"Forester"},{id:9,firstName:"Andi",lastName:"Montgomery"},{id:10,firstName:"Magnolia",lastName:"Kirk"},{id:11,firstName:"Hamilton",lastName:"Mallory"},{id:12,firstName:"Sheree",lastName:"Castle"},{id:13,firstName:"Rebekah",lastName:"Eason"},{id:14,firstName:"Maude",lastName:"Hayley"},{id:15,firstName:"Josie",lastName:"Richard"}]),s={data:function(){return{table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:i.slice(0,5),sort:"+firstName",loading:!0},table2:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName",align:"center"},{label:"Last name",key:"lastName",align:"right"}],items:i.slice(0,5)},table3:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:i,filters:[null,function(e){return"M"===e.lastName[0]},function(e){return e.id>=10}],activeFilter:0},selectedRow:null}},methods:{reload:function(){var e=this;this.table1.loading=!0,setTimeout((function(){return e.table1.loading=!1}),2e3)}},mounted:function(){this.reload()}},r=s,m=a("2877"),o=Object(m["a"])(r,n,l,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=table-index-vue.3dff2d4e.js.map