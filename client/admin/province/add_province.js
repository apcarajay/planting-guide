Template.AddProvince.events ({
	'click #SaveProvince ' : function (e) {
		const ProvinceField = $('#province')
		const province = ProvinceField.val()
		Meteor.call ('add-province',province)
		console.log ("added")
		ProvinceField.val = " "
		FlowRouter.go ('/province')

	},
	'click #Cancel ' : function (e) {
        
        FlowRouter.go('/province')

    }
})