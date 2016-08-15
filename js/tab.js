 		$(function(){

 			var btnFlg = true;
    		//Tabs
    		$('.nav-tabs a').click(function (e) {
    			e.preventDefault();
    			$(this).tab('show');
    		});

    		$('#ct_add_tw').click(function(e){
    			var selectIndex = $('#ct_cg_tw').val();
    			var seletedText = $('#ct_cg_tw').find('option:selected').text();
    			if(selectIndex == '' || seletedText == ''){
    				$('#ct_cg_tw').tooltip('toggle');
    			} else{
    				if(selectIndex.length == 1){
    					selectIndex = '0' + selectIndex;
    				}
    				addTabs({id: selectIndex, title: seletedText.split('|')[0], close: true, navTitle: seletedText.split('|')[1] + seletedText.split('|')[2], content: "取出的array"});
    				getGrid(selectIndex);
    				if(btnFlg){
    					$("button[type='submit']").parent().removeClass('ds-ne');
    					btnFlg = false;
    				}
    				
    			}
    		});

    		$(".nav-tabs").on("click","[tabclose]", function (e) {
    			id = $(this).attr("tabclose");
    			btnFlg = closeTab(id, btnFlg);
    		});

    	});

		function addTabs(obj) {
			id ="tab_"+ obj.id;	
			$('.active').removeClass('active');

			//如果TAB不存在，创建一个新的TAB
			if (!$("#"+ id)[0]) {
				title = '<li role="presentation" id="' + id + '"><a href="#con_' + obj.id + '" aria-controls="' + id + '" role="tab" data-toggle="tab">' + obj.title;
				if (obj.close) {
					title += ' <i class="fa fa-close" tabclose="' + obj.id + '"></i>';
				}
				title += '</a></li>';

				content = '<div role="tabpanel" class="tab-pane" id="con_' + obj.id + '">';
				content += '<div class="list-group width-per-1z5 float-lt ht15">';
				content += '<a href="#" class="list-group-item disabled ht4" id="nt_' + obj.id + '">' + obj.navTitle + '</a>';
				content += '<a href="#" class="list-group-item" id="cc_' + obj.id + '">确认</a>';
				content += '</div>';
				content += '<div class="float-lt width-per-8 ml20 view_tbl" style="height:250px">';
				content += '<form>';
				content += '<table id="view_whs_tbl' + obj.id + '">';
				content += '<div id="view_whs_pages' + obj.id + '"></div>';
				content += '</table>';
				content += '</form></div></div>';

				$(".nav-tabs").append(title);
				$(".tab-content").append(content);
			}
			$("#tab_"+ obj.id).addClass('active');
			$("#con_"+ obj.id).addClass('active');
		}

		function getGrid(id){
			$('#view_whs_tbl' + id).jqGrid({
				datatype: "local",
				height: 250,
				colNames:['仓垛号','粮油品种・分类','粮油等级','原粮食量','导出量','剩余量'],
				colModel:[
				//仓垛号
				{name:'vw_whs_no',index:'vw_whs_no', width:100, sorttype:"text", sortable:true, align:"center"},
				//粮油品种・分类
				{name:'vw_whs_vg_nm',index:'vw_whs_vg_nm', width:180, sorttype:"text", align:"center"},
				//粮油等级
				{name:'vw_whs_gg_nm',index:'vw_whs_gg_nm', width:100, sortable:true, align:"center"},
				//原粮食量
				{name:'vw_whs_ivy_amt',index:'vw_whs_ivy_amt', width:150, align:"right", sorttype:"int"},	
				//导出量
				{name:'vw_whs_co_amt',index:'vw_whs_co_amt', width:150, align:"right", sorttype:"int"},
				//剩余量
				{name:'vw_whs_fs_amt',index:'vw_whs_fs_amt', width:150, align:"right", sorttype:"int"}],
				multiselect: true
			});

			var mydata = [
			{vw_whs_no:"仓垛09",vw_whs_vg_nm:"美红软麦", vw_whs_gg_nm:"一等", vw_whs_ivy_amt:"123456789012345", vw_whs_co_amt:"1234567890", vw_whs_fs_amt:"123455554444455"},
			{vw_whs_no:"仓垛11",vw_whs_vg_nm:"美红软麦", vw_whs_gg_nm:"一等", vw_whs_ivy_amt:"123456789012345", vw_whs_co_amt:"1234567890", vw_whs_fs_amt:"123455554444455"},
			{vw_whs_no:"仓垛12",vw_whs_vg_nm:"美红软麦", vw_whs_gg_nm:"一等", vw_whs_ivy_amt:"123456789012345", vw_whs_co_amt:"1234567890", vw_whs_fs_amt:"123455554444455"},
			{vw_whs_no:"仓垛13",vw_whs_vg_nm:"美红软麦", vw_whs_gg_nm:"一等", vw_whs_ivy_amt:"123456789012345", vw_whs_co_amt:"1234567890", vw_whs_fs_amt:"123455554444455"},						{vw_whs_no:"仓垛09",vw_whs_vg_nm:"美红软麦", vw_whs_gg_nm:"一等", vw_whs_ivy_amt:"123456789012345", vw_whs_co_amt:"1234567890", vw_whs_fs_amt:"123455554444455"},
			{vw_whs_no:"仓垛1",vw_whs_vg_nm:"美红软麦", vw_whs_gg_nm:"一等", vw_whs_ivy_amt:"123456789012345", vw_whs_co_amt:"1234567890", vw_whs_fs_amt:"123455554444455"},
			{vw_whs_no:"仓垛2",vw_whs_vg_nm:"美红软麦", vw_whs_gg_nm:"一等", vw_whs_ivy_amt:"123456789012345", vw_whs_co_amt:"1234567890", vw_whs_fs_amt:"123455554444455"},
			{vw_whs_no:"仓垛3",vw_whs_vg_nm:"美红软麦", vw_whs_gg_nm:"一等", vw_whs_ivy_amt:"123456789012345", vw_whs_co_amt:"1234567890", vw_whs_fs_amt:"123455554444455"}
			];

			for(var i=0;i<=mydata.length;i++){
				$('#view_whs_tbl' + id).jqGrid('addRowData',i+1,mydata[i]);
			}
		}

		function closeTab(id, flg) {
			//如果关闭的是当前激活的TAB，激活他的前一个TAB
			if ($("li.active").attr('id') == "tab_" + id) {
				$("#tab_"+ id).prev().addClass('active');
				$("#con_"+ id).prev().addClass('active');
			}
			//关闭TAB
			$("#tab_"+ id).remove();
			$("#con_"+ id).remove();

			if($('.nav-tabs').children('li').length == 0){
				$("button[type='submit']").parent().addClass('ds-ne');
				flg = true;
			}
			return flg;
		};