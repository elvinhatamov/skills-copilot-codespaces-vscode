function skillsMamber(){
    return {
        name: 'skillsMamber',
        template: `modules/skills/views/member.html`,
        controller:`skillsMamberController`,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}