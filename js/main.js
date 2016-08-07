	$(function () {

		var options = {
				production_year:getYears(),
				go_source:["","辽宁","吉林","黑龙江","河北","山东","河南","内蒙古","进口","本市","移库","加工回收"],//来源内容
				go_varity:["","小麦","国产小麦","稻谷","玉米","大米","面粉","原油", "成品油"],//粮油品种
				go_grade:["","一等","二等","三等","标准","一号","二号","标准","优质","一级"],//粮油等级
				go_classification_lev1:["","美麦","加麦","澳麦","红麦","白麦","谷","无","特一粉","大豆原油","豆"],//粮油分类一级
				go_classification_lev2:["","软","硬"],//粮油分类一级
				go_allcation:["","销售","加工付出","转出","损耗","其他"],//调拨性质
				storage_unit:["","军粮城库","静海库","西营门库","利达临港库","东丽贯庄库","津南国存库","津南八里台","西青张窝库","北辰朱唐庄","唐库国储库","汉沽东风库","大港太平镇库","蓟县上仓库","宝坻储备库","武清运东库","静海古城库","宁河一库","津沽工业","黄庄桂米业"]//承储单位
				// go_quality:,//粮油品质
			};

			changeInOut();
			//日期时间
			getNewDate();
			//下拉列表
			//TODO:年度 需要做成无下限的那种
			getOptions(options.production_year, 'sc_in_py');
			getOptions(options.production_year, 'ct_in_py');
			//品种
			getOptions(options.go_varity, 'sc_in_gv');
			getOptions(options.go_varity, 'ct_in_gv');
			//分类1
			getOptions(options.go_classification_lev1, 'sc_in_gc_l1');
			getOptions(options.go_classification_lev1, 'ct_in_gc_l1');		
			//等级
			getOptions(options.go_grade, 'sc_in_gg');
			getOptions(options.go_grade, 'ct_in_gg');
			//来源
			getOptions(options.go_source, 'sc_in_gs');
			getOptions(options.go_source, 'ct_in_gs');
			//调拨性质
			getOptions(options.go_allcation, 'sc_out_ga');
			getOptions(options.go_allcation, 'ct_out_ga');
			//承储单位
			getOptions(options.storage_unit, 'sc_in_su')
			getOptions(options.storage_unit, 'ct_in_su')
			//导航一级菜单
			$(".dropdown-toggle").dropdown();

			$("#date_info").html(getTime() + " 星期" + getWeek());

			$("#sub_in").on("click",function(){
				layer.open({
					type: 2,
					title: '新增粮油入库单',
					shadeClose: true,
					shade: 0.8,
					area: ['1080px', '70%'],
  					content: ['subIn.html', 'no']
				}); 
			});

			$("#sub_out").on("click",function(){
				layer.open({
					type: 2,
					title: '新增粮油出库单',
					shadeClose: true,
					shade: 0.8,
					area: ['1080px', '70%'],
  					content: ['subOut.html', 'no']
				}); 
			});

			$("#subCg").on("click",function(){
				layer.open({
					type: 2,
					title: '储存地点变更设定',
					shadeClose: true,
					shade: 0.8,
					area: ['1080px', '70%'],
  					content: ['subCg.html', 'no']
				}); 
			});

			$("#cog_ui").on("click",function(){
				layer.open({
					type: 2,
					title: '用户管理',
					shadeClose: true,
					shade: 0.8,
					area: ['1080px', '90%'],
  					content: ['subCogUserInfo.html', 'no']
				}); 
			});

			$("#cog_su_whs").on("click",function(){
				layer.open({
					type: 2,
					title: '承储单位・仓垛设置',
					shadeClose: true,
					shade: 0.8,
					area: ['1080px', '70%'],
  					content: ['subCogSuWhs.html', 'no']
				}); 
			});

			$("#cog_gvc").on("click",function(){
				layer.open({
					type: 2,
					title: '粮油品种・分类设置',
					shadeClose: true,
					shade: 0.8,
					area: ['1080px', '70%'],
  					content: ['subCogGvc.html', 'no']
				}); 
			});

			$("#cog_g3q").on("click",function(){
				layer.open({
					type: 2,
					title: '粮油等级・品质设置',
					shadeClose: true,
					shade: 0.8,
					area: ['1080px', '70%'],
  					content: ['subCogG3q.html', 'no']
				}); 
			});

			$("#sub_in_pt").on("click",function(){
				layer.open({
					type: 2,
					title: '新增粮油入库单',
					shadeClose: true,
					shade: 0.8,
					area: ['756px','700px'],
					content: ['subInPrint.html', 'no'],
				});
			});

			//关于入库一览
			// <!-- 一览START -->
			$("#view_in_tbl").jqGrid({
				datatype: "local",
				height: 230,
				colNames:['单据编号','承储单位', '储存地点', '入库日期','粮油品种','粮油种类','粮油品质','粮食数量','粮食等级','修改'],
				colModel:[
				//单据编号
				{name:'vw_in_ivy_no',index:'vw_in_ivy_no', width:80, sorttype:"text"},
				//承储单位
				{name:'vw_in_unit_nm',index:'vw_in_unit_nm', width:170, sorttype:false},
				//储存地点
				{name:'vw_in_rsv_nm',index:'vw_in_rsv_nm', width:330, sortable:false},
				//入库日期
				{name:'vw_in_tm',index:'vw_in_tm', width:100, align:"center", sorttype:"date"},
				//粮油品种名称
				{name:'vw_in_vry_nm',index:'vw_in_vry_nm', width:80, align:"right", sortable:false},	
				//粮油种类名称
				{name:'vw_in_gc_nm',index:'vw_in_gc_nm', width:80, align:"right", sortable:false},		
				//粮油品质名称
				{name:'vw_in_gq_nm',index:'vw_in_gq_nm', width:80, sortable:false},
				//粮油数量
				{name:'vw_in_ivy_amt',index:'vw_in_ivy_amt', width:80, sorttype:"int"},
				//粮油等级名称
				{name:'vw_in_gg_nm',index:'vw_in_gg_nm', width:80, sortable:false},
				//修改
				{name:'revise',index:'revise', width:60, sortable:false, align:"center", formatter:function(cellvalue, options, rowObject){
					return "<a onclick=\"viewInfo()\" style='text-decoration:underline;color:blue'>"+cellvalue+"</a>";}}],
				multiselect: false,
				rowNum:10,
				rowList:[10,20,30],
				// pager: '#go_in_pages',
				// sortname: 'inventoryIn_id',
				// viewrecords: true,
				// sortorder: "desc",
				caption: "市粮食储备粮油入库单一览"
			});

			var mydata = [
			{vw_in_ivy_no:"S00000001",vw_in_unit_nm:"入库—承储单位", vw_in_rsv_nm:"入库-承储单位12345678910", vw_in_tm:"2016-04-30", vw_in_vry_nm:"小麦", vw_in_gc_nm:"美麦",vw_in_gq_nm:"", vw_in_ivy_amt:"10", vw_in_gg_nm:"特级"},
			{vw_in_ivy_no:"S00000001",vw_in_unit_nm:"入库—承储单位", vw_in_rsv_nm:"入库-承储单位12345678910", vw_in_tm:"2016-04-30", vw_in_vry_nm:"小麦", vw_in_gc_nm:"美麦",vw_in_gq_nm:"", vw_in_ivy_amt:"10", vw_in_gg_nm:"特级"},
			{vw_in_ivy_no:"S00000001",vw_in_unit_nm:"入库—承储单位", vw_in_rsv_nm:"入库-承储单位12345678910", vw_in_tm:"2016-04-30", vw_in_vry_nm:"小麦", vw_in_gc_nm:"美麦",vw_in_gq_nm:"", vw_in_ivy_amt:"10", vw_in_gg_nm:"特级"},
			{vw_in_ivy_no:"S00000001",vw_in_unit_nm:"入库—承储单位", vw_in_rsv_nm:"入库-承储单位12345678910", vw_in_tm:"2016-04-30", vw_in_vry_nm:"小麦", vw_in_gc_nm:"美麦",vw_in_gq_nm:"", vw_in_ivy_amt:"10", vw_in_gg_nm:"特级"},
			{vw_in_ivy_no:"S00000001",vw_in_unit_nm:"入库—承储单位", vw_in_rsv_nm:"入库-承储单位12345678910", vw_in_tm:"2016-04-30", vw_in_vry_nm:"小麦", vw_in_gc_nm:"美麦",vw_in_gq_nm:"", vw_in_ivy_amt:"10", vw_in_gg_nm:"特级"},
			{vw_in_ivy_no:"S00000001",vw_in_unit_nm:"入库—承储单位", vw_in_rsv_nm:"入库-承储单位12345678910", vw_in_tm:"2016-04-30", vw_in_vry_nm:"小麦", vw_in_gc_nm:"美麦",vw_in_gq_nm:"", vw_in_ivy_amt:"10", vw_in_gg_nm:"特级"},
			{vw_in_ivy_no:"S00000001",vw_in_unit_nm:"入库—承储单位", vw_in_rsv_nm:"入库-承储单位12345678910", vw_in_tm:"2016-04-30", vw_in_vry_nm:"小麦", vw_in_gc_nm:"美麦",vw_in_gq_nm:"", vw_in_ivy_amt:"10", vw_in_gg_nm:"特级"},
			{vw_in_ivy_no:"S00000001",vw_in_unit_nm:"入库—承储单位", vw_in_rsv_nm:"入库-承储单位12345678910", vw_in_tm:"2016-04-30", vw_in_vry_nm:"小麦", vw_in_gc_nm:"美麦",vw_in_gq_nm:"", vw_in_ivy_amt:"10", vw_in_gg_nm:"特级"},
			{vw_in_ivy_no:"S00000001",vw_in_unit_nm:"入库—承储单位", vw_in_rsv_nm:"入库-承储单位12345678910", vw_in_tm:"2016-04-30", vw_in_vry_nm:"小麦", vw_in_gc_nm:"美麦",vw_in_gq_nm:"", vw_in_ivy_amt:"10", vw_in_gg_nm:"特级"}
			];
			for(var i=0;i<=mydata.length;i++){
				$("#view_in_tbl").jqGrid('addRowData',i+1,mydata[i]);
			}
			// <!-- 一览END -->

			// $("#go_in_table_content").setGridParam({ rowNum: 30 }).trigger("reloadGrid");
			//关于出库一览
			// <!-- 一览START -->
			$("#view_out_tbl").jqGrid({
				datatype: "local",
				height: 230,
				colNames:['单据编号','原单据编号','储存地点','收货单位','出库日期','原粮食数量','出库数量','损耗数量','调拨性质','修改'],
				colModel:[
				//单据编号
				{name:'vw_out_ivy_no',index:'vw_out_ivy_no', width:80, sorttype:"text"},
				//原单据编号
				{name:'vw_oi_ivy_no',index:'vw_oi_ivy_no', width:80, sorttype:"text"},
				//承储地点
				{name:'vw_out_unit_nm',index:'vw_out_unit_nm', width:250, sortable:false},
				//收货单位
				{name:'vw_out_rsv_nm',index:'vw_out_rsv_nm', width:250, sortable:false},
				//出库日期
				{name:'vw_out_tm',index:'vw_out_tm', width:100, align:"center", sorttype:"date"},
				//原粮食数量
				{name:'vw_oi_ivy_amt',index:'vw_oi_ivy_amt', width:80, align:"right", sorttype:"int"},	
				//出库数量
				{name:'vw_out_ivy_amt',index:'vw_out_ivy_amt', width:70, align:"right", sorttype:"int"},		
				//损耗数量
				{name:'vw_out_lt_amt',index:'vw_out_lt_amt', width:70, align:"right", sorttype:"int"},
				//调拨性质
				{name:'vw_out_ga',index:'vw_out_ga', width:100, align:"right", sortable:false},
				//修改
				{name:'revise',index:'revise', width:60, sortable:false, align:"center", formatter:function(cellvalue, options, rowObject){
					return "<a onclick=\"viewInfo()\" style='text-decoration:underline;color:blue'>"+cellvalue+"</a>";}}],
					multiselect: false,
					caption: "市粮食储备粮油出库单一览"
			});

			var mydata = [
			{vw_out_ivy_no:"C00000001",vw_oi_ivy_no:"S00000001", vw_out_unit_nm:"出库-储存地点12345678910", vw_out_rsv_nm:"出库-收货单位XXXX12345678910", vw_out_tm:"2016-05-30", vw_oi_ivy_amt:"10", vw_out_ivy_amt:"6", vw_out_lt_amt:"4", vw_out_ga:"加工付出"},
			{vw_out_ivy_no:"C00000001",vw_oi_ivy_no:"S00000001", vw_out_unit_nm:"出库-储存地点12345678910", vw_out_rsv_nm:"出库-收货单位XXXX12345678910", vw_out_tm:"2016-05-30", vw_oi_ivy_amt:"10", vw_out_ivy_amt:"6", vw_out_lt_amt:"4", vw_out_ga:"加工付出"},
			{vw_out_ivy_no:"C00000001",vw_oi_ivy_no:"S00000001", vw_out_unit_nm:"出库-储存地点12345678910", vw_out_rsv_nm:"出库-收货单位XXXX12345678910", vw_out_tm:"2016-05-30", vw_oi_ivy_amt:"10", vw_out_ivy_amt:"6", vw_out_lt_amt:"4", vw_out_ga:"加工付出"},
			{vw_out_ivy_no:"C00000001",vw_oi_ivy_no:"S00000001", vw_out_unit_nm:"出库-储存地点12345678910", vw_out_rsv_nm:"出库-收货单位XXXX12345678910", vw_out_tm:"2016-05-30", vw_oi_ivy_amt:"10", vw_out_ivy_amt:"6", vw_out_lt_amt:"4", vw_out_ga:"加工付出"},
			{vw_out_ivy_no:"C00000001",vw_oi_ivy_no:"S00000001", vw_out_unit_nm:"出库-储存地点12345678910", vw_out_rsv_nm:"出库-收货单位XXXX12345678910", vw_out_tm:"2016-05-30", vw_oi_ivy_amt:"10", vw_out_ivy_amt:"6", vw_out_lt_amt:"4", vw_out_ga:"加工付出"},
			{vw_out_ivy_no:"C00000001",vw_oi_ivy_no:"S00000001", vw_out_unit_nm:"出库-储存地点12345678910", vw_out_rsv_nm:"出库-收货单位XXXX12345678910", vw_out_tm:"2016-05-30", vw_oi_ivy_amt:"10", vw_out_ivy_amt:"6", vw_out_lt_amt:"4", vw_out_ga:"加工付出"},
			{vw_out_ivy_no:"C00000001",vw_oi_ivy_no:"S00000001", vw_out_unit_nm:"出库-储存地点12345678910", vw_out_rsv_nm:"出库-收货单位XXXX12345678910", vw_out_tm:"2016-05-30", vw_oi_ivy_amt:"10", vw_out_ivy_amt:"6", vw_out_lt_amt:"4", vw_out_ga:"加工付出"},
			{vw_out_ivy_no:"C00000001",vw_oi_ivy_no:"S00000001", vw_out_unit_nm:"出库-储存地点12345678910", vw_out_rsv_nm:"出库-收货单位XXXX12345678910", vw_out_tm:"2016-05-30", vw_oi_ivy_amt:"10", vw_out_ivy_amt:"6", vw_out_lt_amt:"4", vw_out_ga:"加工付出"},
			{vw_out_ivy_no:"C00000001",vw_oi_ivy_no:"S00000001", vw_out_unit_nm:"出库-储存地点12345678910", vw_out_rsv_nm:"出库-收货单位XXXX12345678910", vw_out_tm:"2016-05-30", vw_oi_ivy_amt:"10", vw_out_ivy_amt:"6", vw_out_lt_amt:"4", vw_out_ga:"加工付出"}
			];

			for(var i=0;i<=mydata.length;i++){
				$("#view_out_tbl").jqGrid('addRowData',i+1,mydata[i]);
			}
			// <!-- 一览END -->

			//关于变更一览
			// <!-- 一览START -->
			$("#view_cg_tbl").jqGrid({
				datatype: "local",
				height: 250,
				colNames:['现单据编号','原单据编号','填报单位','变更日期','原粮食数量','入粮数量','出粮数量','原仓号','变更仓号','修改'],
				colModel:[
				//现单据编号
				{name:'vw_cg_ivy_no',index:'vw_cg_ivy_no', width:80, sorttype:"text"},
				//原单据编号
				{name:'vw_ci_ivy_no',index:'vw_ci_ivy_no', width:80, sorttype:"text"},
				//填报单位
				{name:'vw_cg_rsv_nm',index:'vw_cg_rsv_nm', width:250, sortable:false},
				//变更日期
				{name:'vw_cg_tm',index:'vw_cg_tm', width:100, align:"center", sorttype:"date"},
				//原粮食数量
				{name:'vw_ci_ivy_amt',index:'vw_ci_ivy_amt', width:80, align:"right", sorttype:"int"},	
				//入粮数量
				{name:'vw_cg_ci_amt',index:'vw_cg_ci_amt', width:80, align:"right", sorttype:"int"},
				//出粮数量
				{name:'vw_cg_co_amt',index:'vw_cg_co_amt', width:80, align:"right", sorttype:"int"},	
				//原仓号
				{name:'vw_cg_ows',index:'vw_cg_ows', width:165, sorttype:"text"},
				//变更仓号
				{name:'vw_cg_iws',index:'vw_cg_iws', width:165, sorttype:"text"},
				//修改
				{name:'revise',index:'revise', width:60, sortable:false, align:"center", formatter:function(cellvalue, options, rowObject){
					return "<a onclick=\"viewInfo()\" style='text-decoration:underline;color:blue'>"+cellvalue+"</a>";}}],
					multiselect: false,
					caption: "市粮食储备粮油变更一览"
			});

			var mydata = [
			{vw_cg_ivy_no:"B00000001",vw_ci_ivy_no:"S00000001", vw_cg_rsv_nm:"变更-填报单位12345678910", vw_cg_tm:"2016-04-30", vw_ci_ivy_amt:"100", vw_cg_ci_amt:"32", vw_cg_co_amt:"40", vw_cg_ows:"C0815", vw_cg_iws:"C9080"},
			{vw_cg_ivy_no:"B00000001",vw_ci_ivy_no:"S00000001", vw_cg_rsv_nm:"变更-填报单位12345678910", vw_cg_tm:"2016-04-30", vw_ci_ivy_amt:"100", vw_cg_ci_amt:"32", vw_cg_co_amt:"40", vw_cg_ows:"C0815", vw_cg_iws:"C9080"},
			{vw_cg_ivy_no:"B00000001",vw_ci_ivy_no:"S00000001", vw_cg_rsv_nm:"变更-填报单位12345678910", vw_cg_tm:"2016-04-30", vw_ci_ivy_amt:"100", vw_cg_ci_amt:"32", vw_cg_co_amt:"40", vw_cg_ows:"C0815", vw_cg_iws:"C9080"},
			{vw_cg_ivy_no:"B00000001",vw_ci_ivy_no:"S00000001", vw_cg_rsv_nm:"变更-填报单位12345678910", vw_cg_tm:"2016-04-30", vw_ci_ivy_amt:"100", vw_cg_ci_amt:"32", vw_cg_co_amt:"40", vw_cg_ows:"C0815", vw_cg_iws:"C9080"},
			{vw_cg_ivy_no:"B00000001",vw_ci_ivy_no:"S00000001", vw_cg_rsv_nm:"变更-填报单位12345678910", vw_cg_tm:"2016-04-30", vw_ci_ivy_amt:"100", vw_cg_ci_amt:"32", vw_cg_co_amt:"40", vw_cg_ows:"C0815", vw_cg_iws:"C9080"},
			{vw_cg_ivy_no:"B00000001",vw_ci_ivy_no:"S00000001", vw_cg_rsv_nm:"变更-填报单位12345678910", vw_cg_tm:"2016-04-30", vw_ci_ivy_amt:"100", vw_cg_ci_amt:"32", vw_cg_co_amt:"40", vw_cg_ows:"C0815", vw_cg_iws:"C9080"},
			{vw_cg_ivy_no:"B00000001",vw_ci_ivy_no:"S00000001", vw_cg_rsv_nm:"变更-填报单位12345678910", vw_cg_tm:"2016-04-30", vw_ci_ivy_amt:"100", vw_cg_ci_amt:"32", vw_cg_co_amt:"40", vw_cg_ows:"C0815", vw_cg_iws:"C9080"},
			{vw_cg_ivy_no:"B00000001",vw_ci_ivy_no:"S00000001", vw_cg_rsv_nm:"变更-填报单位12345678910", vw_cg_tm:"2016-04-30", vw_ci_ivy_amt:"100", vw_cg_ci_amt:"32", vw_cg_co_amt:"40", vw_cg_ows:"C0815", vw_cg_iws:"C9080"},
			{vw_cg_ivy_no:"B00000001",vw_ci_ivy_no:"S00000001", vw_cg_rsv_nm:"变更-填报单位12345678910", vw_cg_tm:"2016-04-30", vw_ci_ivy_amt:"100", vw_cg_ci_amt:"32", vw_cg_co_amt:"40", vw_cg_ows:"C0815", vw_cg_iws:"C9080"}
			];

			for(var i=0;i<=mydata.length;i++){
				$("#view_cg_tbl").jqGrid('addRowData',i+1,mydata[i]);
			}
			// <!-- 一览END -->
		});

		function getYears(){
			var yearDate = new Date();
		    var x = 5;
			var startYear = yearDate.getFullYear()-x;//起始年份 
			var endYear = yearDate.getFullYear()+x;//终止年份
			var array = [];
			for (var i=0;i<=x*2;i++) {
				array[i] = startYear + i;
			}
			return array;
		}

		// 后期代码统筹
		function getOptions(opt, id){
			var obj=document.getElementById(id);
			if(obj != undefined && obj != null && obj != ''){
				for (var i=0;i<=opt.length-1;i++) {
					if(i == 0){
						obj.options.add(new Option(opt[i],"")); 
					} else{
						obj.options.add(new Option(opt[i],i)); 
					}
				}
				if(id == 'sc_in_py'|| id == 'ct_in_py'){
					var nowYear = new Date().getFullYear();
					for(var i=0; i<=opt.length-1; i++){
						if(nowYear == opt[i]){
							obj.options[i].selected=1;
						}
					}
				} else {
					obj.options[0].selected=1;
				}
			}
			return obj;
		}

		function getTime() {
			// 计算当前日期
			var now = new Date();
			var year = now.getFullYear();
			var month = now.getMonth() + 1;
			month = month < 10 ? ("0"+ month): month;
			var dt = now.getDate();
			dt = dt < 10? ("0" + dt): dt;
			var day = year + "-" + month + "-" + dt;
			return day;
		}

		function getWeek(){
			var week = new Date().getDay();
			switch(week)
			{
				case 1: 
					week = "一";
					break;
				case 2:
					week = "二";
					break;
				case 3:
					week = "三";
					break;
				case 4:
					week = "四";
					break;
				case 5:
					week = "五";
					break;
				case 6:
					week = "六";
					break;
				case 0:
					week = "日";
					break;
				default:;
			}
			return week;
		}

		//获取最新日期_初期化用
		function getNewDate(){
			var day = getTime();
			// 输出当前日期
			var inTrm = $(".inventory_tm");

			if(typeof(inTrm) != "undefined"){
				$(".inventory_tm").val(day);				
			} 
		}

		//TODO:切换标签页
		function changeInOut(){
			$("div>aside>ul>li").click(function(){
				var artArray = document.getElementsByTagName("article");
				if($(this).index() == 0){
					artArray[1].style.display = "none";
					artArray[2].style.display = "none";
					artArray[0].style.display = "block";
				} else if ($(this).index() == 1){
					artArray[0].style.display = "none";
					artArray[2].style.display = "none";
					artArray[1].style.display = "block";
				} else if ($(this).index() == 2){
					artArray[0].style.display = "none";
					artArray[1].style.display = "none";
					artArray[2].style.display = "block";
				}
			});
		}

		Date.prototype.Format = function(formatStr)   
		{   
			var str = formatStr;   

			str=str.replace(/yyyy|YYYY/,this.getFullYear());   
			str=str.replace(/yy|YY/,(this.getYear() % 100)>9?(this.getYear() % 100).toString():'0' + (this.getYear() % 100));   

			str=str.replace(/MM/,this.getMonth()>9?this.getMonth().toString():'0' + this.getMonth());   
			str=str.replace(/M/g,this.getMonth());   

			str=str.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());   
			str=str.replace(/d|D/g,this.getDate());    

			return str;   
		} 

		function customDropDown(ele){
			this.dropdown=ele;
			this.placeholder=this.dropdown.find(".placeholder");
			this.options=this.dropdown.find("ul.dropdown-menu > li");
			this.val='';
            this.index=-1;//默认为-1;
            this.initEvents();
        }

        customDropDown.prototype={
        	initEvents:function(){
        		var obj=this;
                //这个方法可以不写，因为点击事件被Bootstrap本身就捕获了，显示下面下拉列表
                obj.dropdown.on("click",function(event){
                	$(this).toggleClass("active");
                });
                
                //点击下拉列表的选项
                obj.options.on("click",function(){
                	var opt=$(this);
                	obj.text=opt.find("a").text();
                	obj.val=opt.attr("value");
                	obj.index=opt.index();
                	obj.placeholder.text(obj.text);
                });
            },
            getText:function(){
            	return this.text;
            },
            getValue:function(){
            	return this.val;
            },
            getIndex:function(){
            	return this.index;
            }
        }
