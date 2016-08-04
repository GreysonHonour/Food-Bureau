$(function(){
	//判断入口
	if($('#loginForm').length >= 1){
		$('#loginForm').bootstrapValidator({
			message: 'This value is not valid',
			feedbackIcons: {
				valid: 'fa fa-check',
				invalid: 'fa fa-times',
				validating: 'fa fa-refresh'
			},
			fields: {

			}
		});
	}


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
				ctInSu: {
					validators: {
						notEmpty: {
							message: '内容不能为空'
						}
					}
				},
				ctInUnitNm: {
					validators: {
						notEmpty: {
							message: '内容不能为空'
						}
					}
				},
				ctInGv: {
					validators: {
						notEmpty: {
							message: '内容不能为空'
						}
					}
				},
				ctInGcL1: {
					validators: {
						notEmpty: {
							message: '内容不能为空'
						}
					}
				},
				ctInGg: {
					validators: {
						notEmpty: {
							message: '内容不能为空'
						}
					}
				},
				ctInPy: {
					validators: {
						notEmpty: {
							message: '内容不能为空'
						}
					}
				},
				ctInGs: {
					validators: {
						notEmpty: {
							message: '内容不能为空'
						}
					}
				},
				ctInGq: {
					validators: {
						notEmpty: {
							message: '内容不能为空'
						}
					}
				}
				/*
				ctInRk: {
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
				},
				ctOutNoteNo: {
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
				},
				ctOutSu: {
					validators: {
						notEmpty: {
							message: '内容不能为空'
						}
					}
				},
				ctOutUnitNm: {
					validators: {
						notEmpty: {
							message: '内容不能为空'
						}
					}
				},
				ctOutGa: {
					validators: {
						notEmpty: {
							message: '内容不能为空'
						}
					}
				}
			}
		});
	}
});