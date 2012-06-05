Ext.define('Registration.view.BMICalc', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.BMICalculate',
    border: 0,
    padding: 10,
    autoScroll: true,
    layout: {
        type: 'auto'
    },
    initComponent: function () {
        this.items = {
            border: 0,
            items: [{
                xtype: 'panel',
                border: 0,
                bodyPadding: 10,
                items: [{
                    xtype: 'fieldset',
                    padding: 10,
                    title: 'BMI Calculator',
                    items: [{
                        xtype: 'label',
                        text: 'BMI Value'
                    }, {
                        xtype: 'form',
                        id: 'HtWtID',
                        border: 0,
                        layout: {
                            align: 'stretch',
                            type: 'hbox'
                        },
                        bodyPadding: 10,
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: 'Height',
                            id: 'heightIDcm',
                            emptyText: 'Enter Height in cm',
                            //							value: '150',
                            labelPad: 20,
                            labelWidth: 70,
                            labelAlign: 'right',
                            anchor: '95%',
                            margin: '0 10 0 0'
                        }, {
                            xtype: 'label',
                            text: 'cm'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: 'Weight',
                            id: 'weightIDkg',
                            emptyText: 'Enter Weight in Kg',
                            //							value: '50',
                            labelPad: 20,
                            labelWidth: 70,
                            labelAlign: 'right',
                            anchor: '95%',
                            margin: '0 10 0 0'
                        }, {
                            xtype: 'label',
                            text: 'Kg'
                        }]
                    }, {
                        xtype: 'textfield',
                        height: 40,
                        width: 140,
                        fieldStyle: 'font-size:150%',
                        fieldLabel: 'BMI',
                        emptyText: 'Wait',
                        id: 'BMITextFieldID',
                        readOnly: true,
                        labelAlign: 'right',
                        labelStyle: 'font-size:200%',
                        labelWidth: 70
                    }, {
                        xtype: 'label',
                        html: '<div align="center"><b>BMI Index</div>'
                    }, {
                        xtype: 'panel',
                        height: 40,
                        border: 0,
                        layout: {
                            align: 'stretch',
                            pack: 'center',
                            type: 'vbox',
                            padding: 30
                        },
                        items: {
                            xtype: 'slider',
                            id: 'BMISliderID',
                            disabledCls: 'x-form-readonly',
                            readOnly: true,
                            value: 22.22,
                            minValue: 1,
                            maxValue: 60
                        }
                    }, {
                        xtype: 'fieldcontainer',
                        fieldLabel: 'BMI Status',
                        layout: 'hbox',
                        combineErrors: true,
                        defaultType: 'textfield',
                        labelAlign: 'right',
                        labelPad: 20,
                        labelWidth: 70,
                        anchor: '95%',
                        defaults: {
                            hideLabel: 'true'
                        },
                        items: {
                            name: 'BmiStatus',
                            id: 'BMIStatusID',
                            fieldLabel: 'BMI Status',
                            readOnly: true,
                            flex: 1,
                            emptyText: 'BMI Status Value',
                            allowBlank: true
                        }
                    }, {
                        xtype: 'button',
                        margin: '30 0 0 30',
                        width: 60,
                        action: 'BMISubmit',
                        id: 'submitBMI',
                        text: 'Submit',
                        handler: function () {
                            var l = Ext.getCmp('mainregarea').getLayout();
                            l.setActiveItem(0); //going to confirmation page
                        }
                    }]
                }]
            }]
        };
        this.callParent();
    }
});
