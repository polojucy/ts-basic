const enum Sex {
    FEMALE = 0,
    MALE
}

const getSex = (sex:Sex) => {
    switch (sex) {
        case Sex.FEMALE:
            console.log("sex is female")
            break;
        default:
            console.log("sex is male")
            break;
    }
}

getSex(Sex.FEMALE)