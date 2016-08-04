  $(function () {
      $("#su_tbl").jqGrid({
        datatype: "local",
        height: 260,
        colNames:['Name','Action'],
        colModel:[
        //
        {name:'name',index:'name', width:300, sorttype:"text",editable:true,sortable:false},
        //
        {name:'action',index:'action', width:200, sorttype:"text",sortable:false}],
        multiselect: false,
        rowNum:10,
        hidegrid:false,
        sortorder: "desc",
        gridComplete: function(){
            var ids = $("#su_tbl").jqGrid('getDataIDs');
            for(var i=0;i < ids.length;i++){
                var cl = ids[i];
                var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#su_tbl').saveRow('"+cl+"');\"  />"; 
                var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#su_tbl').delRowData('"+cl+"');\"  />";
                $("#su_tbl").jqGrid('setRowData',ids[i],{action:re+de});
            }
        },
        onSelectRow:function(id){
          $("#su_tbl").editRow(id, true);  
        },
        caption: "一览"
      });


        $("#whs_tbl").jqGrid({
        datatype: "local",
        height: 260,
        colNames:['Name','Action'],
        colModel:[
        //
        {name:'name',index:'name', width:300, sorttype:"text",editable:true,sortable:false},
        //
        {name:'action',index:'action', width:200, sorttype:"text",sortable:false}],
        multiselect: false,
        rowNum:10,
        hidegrid:false,
        sortorder: "desc",
        gridComplete: function(){
            var ids = $("#whs_tbl").jqGrid('getDataIDs');
            for(var i=0;i < ids.length;i++){
                var cl = ids[i];
                var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#whs_tbl').saveRow('"+cl+"');\"  />"; 
                var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#whs_tbl').delRowData('"+cl+"');\"  />";
                $("#whs_tbl").jqGrid('setRowData',ids[i],{action:re+de});
            }
        },
        onSelectRow:function(id){
          $("#whs_tbl").editRow(id, true);  
        },
        caption: "一览"
      });

      var mydata = [
        {name:"储备分公司"},
        {name:"军粮城库"},
        {name:"静海库"},
        {name:"西营门库"},
        {name:"利达临港库"},
        {name:"东丽贯庄库"},
        {name:"津南国储库"},
        {name:"津南八里台"},
        {name:"西青张窝库"},
        {name:"北辰朱唐庄"},
        {name:"塘沽国储库"},
        {name:"汉沽东风库"},
        {name:"大港库"},
        {name:"蓟县上仓库"},
        {name:"宝坻储备库"},
        {name:"武清运东库"},
        {name:"静海古城库"},
        {name:"宁河一库"}];
        for(var i=0;i<=mydata.length;i++){
            $("#su_tbl").jqGrid('addRowData',i+1,mydata[i]);
      }

      var mydata2 = [
        {name:"仓垛1"},
        {name:"仓垛2"},
        {name:"仓垛3"},
        {name:"仓垛4"},
        {name:"仓垛5"},
        {name:"仓垛6"},
        {name:"仓垛7"},
        {name:"仓垛8"},
        {name:"仓垛9"},
        {name:"仓垛10"},
        {name:"仓垛11"},
        {name:"仓垛12"},
        {name:"仓垛13"},
        {name:"仓垛14"},
        {name:"仓垛15"},
        {name:"仓垛16"},
        {name:"仓垛17"},
        {name:"仓垛18"}];
        for(var i=0;i<=mydata2.length;i++){
            $("#whs_tbl").jqGrid('addRowData',i+1,mydata2[i]);
      }

      $("#su_add_row").live('click',function(){
        if($('#suForm').data('bootstrapValidator').isValid()){
          var ids = $("#su_tbl").jqGrid('getDataIDs');
          var cl = ids[ids.length];
          var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#su_tbl').saveRow('"+cl+"');\"  />"; 
          var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#su_tbl').delRowData('"+cl+"');\"  />";
          var rowdata = {
            name: $("#su_input").val(),
            action:re+de
          }
          $("#su_tbl").addRowData(cl, rowdata, "first");
        }
      });

      $("#whs_add_row").live('click',function(){
        if($('#whsForm').data('bootstrapValidator').isValid()){
          var ids = $("#whs_tbl").jqGrid('getDataIDs');
          var cl = ids[ids.length];
          var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#whs_tbl').saveRow('"+cl+"');\"  />"; 
          var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#whs_tbl').delRowData('"+cl+"');\"  />";
          var rowdata = {
            name: $("#whs_input").val(),
            action:re+de
          }
          $("#whs_tbl").addRowData(cl, rowdata, "first");
        }
      });
});