<template>
    <div class="container">
        <div class="page">
            <div class="weui-form">
                <div class="weui-form__text-area">
                    <div class="weui-cells__group weui-cells__group_form">
                        <div class="weui-cell">
                            <div class="weui-cell__hd"><label class="weui-label">位置</label></div>
                            <div class="weui-cell__bd">
                                深圳市分公司
                            </div>
                        </div>
                    </div>
                </div>
                <div class="weui-form__control-area">
                <div class="weui-cells__group weui-cells__group_form">
                    <div class="weui-cells__title"></div>
                    <div class="weui-cells weui-cells_form">
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
                        <div class="weui-cell__bd">
                            <input id="js_input" class="weui-input" placeholder="请输入您的姓名"/>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">联系方式</label></div>
                        <div class="weui-cell__bd">
                            <input id="js_input" class="weui-input" placeholder="请输入您的联系方式"/>
                        </div>
                    </div>
                    <div class="weui-cell weui-cell_vcode">
                        <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
                        <div class="weui-cell__bd">
                            <input autofocus class="weui-input" type="text" pattern="[0-9]*" id="js_input" placeholder="输入验证码" maxlength="6"/>
                        </div>
                        <div class="weui-cell__ft">
                            <button class="weui-btn weui-btn_default weui-vcode-btn">获取验证码</button>
                        </div>
                    </div>
                    <div class="weui-cell weui-cell_select weui-cell_select-after">
                        <div class="weui-cell__hd"><label class="weui-label">投诉主题</label></div>
                        <!-- <div class="weui-cell__bd" @click="handleClick">请选择投诉主题</div> -->
                        <select class="weui-select" id="case_title" reg="[^ \f\n\r\t\v]" tip="投诉主题不为空" ok-tip="">
                        
                        <option value="">请选择投诉主题</option>
                                                                        <option value="1">关于排队/秩序问题投诉</option>
                                                <option value="2">关于科室医生服务的投诉</option>
                                                <option value="3">关于分院卫生/早餐/停车的投诉</option>
                                                <option value="4">关于前台服务投诉</option>
                                                <option value="5">关于预约的投诉</option>
                                                <option value="6">关于误诊、漏诊的投诉</option>
                                                <option value="7">关于电话不通的投诉</option>
                                                <option value="8">关于报告领取/未出的投诉</option>
                                                <option value="9">关于销售、售卡相关的投诉</option>
                                                <option value="10">关于分院护士/导诊服务投诉</option>
                                                <option value="11">关于报告内容相关投诉</option>
                                                                        
                    </select>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">问题描述</label></div>
                        <div class="weui-cell__bd">
                                <textarea class="weui-textarea" placeholder="请描述你所发生的问题" rows="3"></textarea>
                                <div class="weui-textarea-counter"><span>0</span>/200</div>
                            </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="weui-form__opr-area">
                    <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">确定</a>
                </div>
            </div>
            <div id="js_toast" style="display: none;">
                <div class="weui-mask_transparent"></div>
                <div class="weui-toast">
                    <i class="weui-icon-success-no-circle weui-icon_toast"></i>
                    <p class="weui-toast__content">已完成</p>
                </div>
            </div>
            </div>
    </div>
</template>
<script>
export default {
    name: 'Suggest',
    methods: {
        handleClick() {
            this.$weui.picker([{
                label: '飞机票',
                value: 0
            }, {
                label: '火车票',
                value: 1
            }, {
                label: '的士票',
                value: 2
            },{
                label: '公交票 (disabled)',
                disabled: true,
                value: 3
            }, {
                label: '其他',
                value: 4
            }], {
                onChange: function (result) {
                    console.log(result);
                },
                onConfirm: function (result) {
                    console.log(result);
                },
                title: '单列选择器'
            });
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    background-color: #eff3f9;
    .weui-form {
        padding: 0;
        background-color: transparent;
        .weui-cell {
            font-size: 0.14rem;
            padding-left: .10rem;
            .weui-label {
                font-weight: bold;
            }
        }
        .weui-form__text-area {
            background-color: #fff;
            padding: 0;
            .weui-cell__bd {
                flex: none;
            }
        }
        .weui-form__control-area {
            margin-top: .10rem;
            .weui-cells__group_form .weui-cell_vcode {
                padding: 0.16rem;
            }
            .weui-cells__group_form .weui-vcode-btn {
                font-size: 0.12rem;
                white-space: nowrap;
                padding: 0.05rem 0.12rem;
            }
            .weui-cell_select {
                .weui-cell__bd {
                    text-align: start;
                }
                
            }
        }
        .weui-form__opr-area {
            .weui-btn_primary {
                width: 3rem;
                border-radius: 50vw;
                background-color: #22b2e7;
            }
        }
    }
    .weui-cells__group_form {
        font-size: 0.14rem;
    }
}

</style>