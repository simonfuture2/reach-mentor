'reach 0.1';

const commonInteract = {};
const studentInteract = {
    ...commonInteract
};
const mentorInteract = {
    ...commonInteract
};

export const main = Reach.App(() => {
    const S = Participant('Student', studentInteract);
    const M = Participant('Mentor', mentorInteract);
    init();

    exit();
});
