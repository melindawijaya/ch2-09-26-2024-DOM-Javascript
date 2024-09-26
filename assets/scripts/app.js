class Tooltip {

}

class ProjectItem {
    constructor(id, updateProjectListFunction) {
        this.id = (id);
        this.updateProjectListFunction = updateProjectListFunction;
        this.connectSwitchButton();
        this.connectMoreInfoButton();
    }

    connectMoreInfoButton(){}
    
    connectSwitchButton(){
        const projectItemElement = document.getElementById(this.id);
        const switchButton = projectItemElement.querySelector(
            "button:last-of-type"
        );
        switchButton.addEventListener("click", this.updateProjectListFunction);
    }

}

class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;

        // EXAMPLE: #active-projects li
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        // for (let i=0; i<this.projects.length; i++)
        for(const projectItem of projectItems) {
            console.log(type);
            console.log(projectItem);
            this.projects.push(
                new ProjectItem(projectItem.id, thisSwitchProject.bind(this))
            );
        }
    }

    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }

    addProject() {
        console.log(this);
    }

    switchProject(projectId) {
        this.project = this.projects.find((i) => i.id === projectId)
        this.project.filter((i) => i.id !== projectId)  
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList("active");
        const finishedProjectList = new ProjectList("finished");
        activeProjectList.setSwitchHandlerFunction(
            finishedProjectList.addProject.bind(finishedProjectList)
        );
    }
}

App.init();