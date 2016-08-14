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

        $("#gc_tbl").jqGrid({
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
            var ids = $("#gc_tbl").jqGrid('getDataIDs');
            for(var i=0;i < ids.length;i++){
                var cl = ids[i];
                var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#gc_tbl').saveRow('"+cl+"');\"  />"; 
                var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#gc_tbl').delRowData('"+cl+"');\"  />";
                $("#gc_tbl").jqGrid('setRowData',ids[i],{action:re+de});
            }
        },
        onSelectRow:function(id){
          $("#gc_tbl").editRow(id, true);  
        },
        caption: "一览"
      });

      $("#gg_tbl").jqGrid({
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
            var ids = $("#gg_tbl").jqGrid('getDataIDs');
            for(var i=0;i < ids.length;i++){
                var cl = ids[i];
                var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#gg_tbl').saveRow('"+cl+"');\"  />"; 
                var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#gg_tbl').delRowData('"+cl+"');\"  />";
                $("#gg_tbl").jqGrid('setRowData',ids[i],{action:re+de});
            }
        },
        onSelectRow:function(id){
          $("#gg_tbl").editRow(id, true);  
        },
        caption: "一览"
      });

      $("#gq_tbl").jqGrid({
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
            var ids = $("#gq_tbl").jqGrid('getDataIDs');
            for(var i=0;i < ids.length;i++){
                var cl = ids[i];
                var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#gq_tbl').saveRow('"+cl+"');\"  />"; 
                var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#gq_tbl').delRowData('"+cl+"');\"  />";
                $("#gq_tbl").jqGrid('setRowData',ids[i],{action:re+de});
            }
        },
        onSelectRow:function(id){
          $("#gq_tbl").editRow(id, true);  
        },
        caption: "一览"
      });

      $("#gs_tbl").jqGrid({
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
            var ids = $("#gs_tbl").jqGrid('getDataIDs');
            for(var i=0;i < ids.length;i++){
                var cl = ids[i];
                var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#gs_tbl').saveRow('"+cl+"');\"  />"; 
                var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#gs_tbl').delRowData('"+cl+"');\"  />";
                $("#gs_tbl").jqGrid('setRowData',ids[i],{action:re+de});
            }
        },
        onSelectRow:function(id){
          $("#gs_tbl").editRow(id, true);  
        },
        caption: "一览"
      });

      $("#ga_tbl").jqGrid({
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
            var ids = $("#ga_tbl").jqGrid('getDataIDs');
            for(var i=0;i < ids.length;i++){
                var cl = ids[i];
                var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#ga_tbl').saveRow('"+cl+"');\"  />"; 
                var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#ga_tbl').delRowData('"+cl+"');\"  />";
                $("#ga_tbl").jqGrid('setRowData',ids[i],{action:re+de});
            }
        },
        onSelectRow:function(id){
          $("#ga_tbl").editRow(id, true);  
        },
        caption: "一览"
      });

      $("#ui_tbl").jqGrid({
        datatype: "local",
        height: 310,
        colNames:['Name','Action'],
        colModel:[
        //
        {name:'name',index:'name', width:240, sorttype:"text",editable:true,sortable:false},
        //
        {name:'action',index:'action', width:230, sorttype:"text",sortable:false}],
        multiselect: false,
        rowNum:10,
        hidegrid:false,
        sortorder: "desc",
        gridComplete: function(){
            var ids = $("#ui_tbl").jqGrid('getDataIDs');
            for(var i=0;i < ids.length;i++){
                var cl = ids[i];
                var ed = "<input class='w6 h2' style='margin-left:10px' type='button' value='编辑' onclick=\"$('#ui_tbl').editRow('"+cl+"');\"  />";
                var sa = "<input class='w6 h2' style='margin-left:10px' type='button' value='保存' onclick=\"$('#ui_tbl').saveRow('"+cl+"');\"  />"; 
                var de = "<input class='w6 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#ui_tbl').delRowData('"+cl+"');\"  />";
                $("#ui_tbl").jqGrid('setRowData',ids[i],{action:ed+sa+de});
            }
        },
        onSelectRow:function(id){
            //根据id取值 异步加载
            if(id == 1){
                var zTreeObj = $.fn.zTree.init($("#rt_tree"), setting2, zNodes2);
                zTreeObj.expandAll(true);
            } else{
                var zTreeObj = $.fn.zTree.init($("#rt_tree"), setting2, zNodes3);
                zTreeObj.expandAll(true);
            }
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

      var mydata3 = [
        {name:"硬麦"},
        {name:"软麦"}];
        for(var i=0;i<=mydata3.length;i++){
            $("#gc_tbl").jqGrid('addRowData',i+1,mydata3[i]);
      }

      var mydata4 = [
        {name:"一等"},
        {name:"二等"},
        {name:"三等"},
        {name:"四等"},
        {name:"三等"},
        {name:"三等"},
        {name:"三等"},
        {name:"三等"},
        {name:"三等"},
        {name:"三等"},
        {name:"三等"},
        {name:"三等"},
        {name:"三等"},
        {name:"三等"},
        {name:"三等"},
        {name:"三等"},
        {name:"三等"},
        {name:"三等"}];
        for(var i=0;i<=mydata4.length;i++){
            $("#gg_tbl").jqGrid('addRowData',i+1,mydata4[i]);
      }

      var mydata5 = [
        {name:"宜存"}];
        for(var i=0;i<=mydata5.length;i++){
            $("#gq_tbl").jqGrid('addRowData',i+1,mydata5[i]);
      }

      var mydata6 = [
        {name:"郭宇佳"},
        {name:"乔旭"}];
        for(var i=0;i<=mydata6.length;i++){
            $("#ui_tbl").jqGrid('addRowData',i+1,mydata6[i]);
      }

      var mydata7 = [
        {name:"辽宁"},
        {name:"吉林"},
        {name:"黑龙江"},
        {name:"河北"},
        {name:"山东"},
        {name:"河南"},
        {name:"内蒙古"},
        {name:"进口"},
        {name:"本市"},
        {name:"移库"},
        {name:"加工回收"}
        ];
        for(var i=0;i<=mydata7.length;i++){
            $("#gs_tbl").jqGrid('addRowData',i+1,mydata7[i]);
      }

      var mydata8 = [
        {name:"销售"},
        {name:"加工付出"},
        {name:"转出"},
        {name:"损耗"},
        {name:"其他"}
        ];
        for(var i=0;i<=mydata8.length;i++){
            $("#ga_tbl").jqGrid('addRowData',i+1,mydata8[i]);
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

      $("#gc_add_row").live('click',function(){
        if($('#gcForm').data('bootstrapValidator').isValid()){
          var ids = $("#gc_tbl").jqGrid('getDataIDs');
          var cl = ids[ids.length];
          var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#gc_tbl').saveRow('"+cl+"');\"  />"; 
          var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#gc_tbl').delRowData('"+cl+"');\"  />";
          var rowdata = {
            name: $("#gc_input").val(),
            action:re+de
          }
          $("#gc_tbl").addRowData(cl, rowdata, "first");
        }
      });

      $("#gg_add_row").live('click',function(){
        if($('#ggForm').data('bootstrapValidator').isValid()){
          var ids = $("#gg_tbl").jqGrid('getDataIDs');
          var cl = ids[ids.length];
          var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#gg_tbl').saveRow('"+cl+"');\"  />"; 
          var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#gg_tbl').delRowData('"+cl+"');\"  />";
          var rowdata = {
            name: $("#gg_input").val(),
            action:re+de
          }
          $("#gg_tbl").addRowData(cl, rowdata, "first");
        }
      });

      $("#gq_add_row").live('click',function(){
        if($('#gqForm').data('bootstrapValidator').isValid()){
          var ids = $("#gq_tbl").jqGrid('getDataIDs');
          var cl = ids[ids.length];
          var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#gq_tbl').saveRow('"+cl+"');\"  />"; 
          var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#gq_tbl').delRowData('"+cl+"');\"  />";
          var rowdata = {
            name: $("#gq_input").val(),
            action:re+de
          }
          $("#gq_tbl").addRowData(cl, rowdata, "first");
        }
      });

      $("#gs_add_row").live('click',function(){
        if($('#gsForm').data('bootstrapValidator').isValid()){
          var ids = $("#gs_tbl").jqGrid('getDataIDs');
          var cl = ids[ids.length];
          var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#gs_tbl').saveRow('"+cl+"');\"  />"; 
          var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#gs_tbl').delRowData('"+cl+"');\"  />";
          var rowdata = {
            name: $("#gs_input").val(),
            action:re+de
          }
          $("#gs_tbl").addRowData(cl, rowdata, "first");
        }
      });

      $("#ga_add_row").live('click',function(){
        if($('#gaForm').data('bootstrapValidator').isValid()){
          var ids = $("#ga_tbl").jqGrid('getDataIDs');
          var cl = ids[ids.length];
          var re = "<input class='w8 h2' style='margin-left:10px' type='button' value='更新' onclick=\"$('#ga_tbl').saveRow('"+cl+"');\"  />"; 
          var de = "<input class='w8 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#ga_tbl').delRowData('"+cl+"');\"  />";
          var rowdata = {
            name: $("#ga_input").val(),
            action:re+de
          }
          $("#ga_tbl").addRowData(cl, rowdata, "first");
        }
      });

      $("#ui_add_row").live('click',function(){
        if($('#uiForm').data('bootstrapValidator').isValid()){
          var ids = $("#ui_tbl").jqGrid('getDataIDs');
          var cl = ids[ids.length];
          var ed = "<input class='w6 h2' style='margin-left:10px' type='button' value='编辑' onclick=\"$('#ui_tbl').editRow('"+cl+"');\"  />"; 
          var sa = "<input class='w6 h2' style='margin-left:10px'type='button' value='保存' onclick=\"$('#ui_tbl').saveRow('"+cl+"');\"  />";
          var de = "<input class='w6 h2' style='margin-left:10px'type='button' value='删除' onclick=\"$('#ui_tbl').delRowData('"+cl+"');\"  />";
          var rowdata = {
            name: $("#ui_name").val(),
            action:ed+sa+de
          }
          $("#ui_tbl").addRowData(cl, rowdata, "first");
        }
      });
});