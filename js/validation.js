$(function(){
	//判断入口
	if($('#inForm').length >= 1){

		$('#inForm').bootstrapValidator({
			message: 'This value is not valid',
			feedbackIcons: {
				valid: 'fa fa-check',
				invalid: 'fa fa-times',
				validating: 'fa fa-refresh'
			},
			fields: {
				ctInNoteNo: {
					message: '通知书编号验证失败',
					validators: {
						notEmpty: {
							message: '内容不能为空'
						},
                   		stringLength: {
                   			min: 1,
                        	max: 16,
                        	message: '内容长度应该在1到16之间'
                   		},
                   		regexp: {
                   			regexp: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,
                   			message: '内容只能包含大小写字母、数字、汉字'
                   		}
					}
				},
				ctInIvyAmtNm: {
					message: '入库量验证失败',
					validators: {
						notEmpty: {
							message: '内容不能为空'
						},
						integer: {
                        	message: '内容应该是整数字'
                   		},
                   		stringLength: {
                   			min: 1,
                            max: 5,
                            message: '内容长度应该在1到5之间'
                   		}
					}
				}
				/*
				ctInRk: {
					message: '备注验证失败',
					validators: {
                   		stringLength: {
                   			min: 1,
                            max: 600,
                            message: '内容长度应该在1到600之间'
                   		},
                   		regexp: {
                   			//regexp:/[^\<|\>|\"|\'|\&]+/g,
                   			regexp:(/?!\<|\>|\"|\'|\&)+/g,
                   			message: "内容不可以含有尖括号,单双引号,和&符号"
                   		}
					}
				}
				*/
			}
		});
	}
	if($('#outForm').length >= 1){
		$('#outForm').bootstrapValidator({
			message: 'This value is not valid',
			feedbackIcons: {
				valid: 'fa fa-check',
				invalid: 'fa fa-times',
				validating: 'fa fa-refresh'
			},
			fields: {
				ctOiIvyAmt: {
					message: '原粮食量验证失败',
					validators: {
						notEmpty: {
							message: '内容不能为空'
						},
						integer: {
                        	message: '内容应该是整数字'
                   		},
                   		stringLength: {
                   			min: 1,
                            max: 5,
                            message: '内容长度应该在1到5之间'
                   		}
					}
				},
				ctOutIvyAmt: {
					message: '出库数量验证失败',
					validators: {
						notEmpty: {
							message: '内容不能为空'
						},
						integer: {
                        	message: '内容应该是整数字'
                   		},
                   		stringLength: {
                   			min: 1,
                            max: 5,
                            message: '内容长度应该在1到5之间'
                   		}
					}
				},
				ctOutLtAmt: {
					message: '损耗数量验证失败',
					validators: {
						notEmpty: {
							message: '内容不能为空'
						},
						integer: {
                        	message: '内容应该是整数字'
                   		},
                   		stringLength: {
                   			min: 1,
                            max: 5,
                            message: '内容长度应该在1到5之间'
                   		}
					}
				},
				ctOutRsvNm: {
					message: '收货单位验证失败',
					validators: {
						notEmpty: {
							message: '内容不能为空'
						},
                   		stringLength: {
                   			min: 1,
                        	max: 40,
                        	message: '内容长度应该在1到40之间'
                   		},
                   		regexp: {
                   			regexp: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,
                   			message: '内容只能包含大小写字母、数字、汉字'
                   		}
					}
				}
			}
		});
	}

})

	/*
	$('form').bootstrapValidator({
		message: 'This value is not valid',
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			username: {
				message: '用户名验证失败',
				validators: {
					notEmpty: {
						message: '用户名不能为空'
					},
					stringLength: {
						min: 6,
						max: 18,
						message: '用户名长度必须在6到18位之间'
					},
					regexp: {
						regexp: /^[a-zA-Z0-9_]+$/,
						message: '用户名只能包含大写、小写、数字和下划线'
					}
				}
			},
			email: {
				validators: {
					notEmpty: {
						message: '邮箱不能为空'
					},
					emailAddress: {
						message: '邮箱地址格式有误'
					}
				}
			}
		}
	});
	*/