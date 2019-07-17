class Project {
    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.steps = [];
    }

    addStep(step) {
        this.steps.push(step);
    }
}