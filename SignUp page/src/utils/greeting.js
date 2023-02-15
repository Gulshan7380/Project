
export const getGreeting = () => {
    const today = new Date();
    const hour = today.getHours();
    if (hour >= 12 && hour <= 16) {
        return `Welcome, Good Afternoon`;
    }
    if (hour < 12 && hour >= 1) {
        return `Welcome, Good Morning`;
    }
    if (hour > 16 && hour <= 18) {
        return `Welcome, Good Evening`;
    }
    return `Welcome, Good Night`;
};

export const getLiveTime = () => {
    const today = new Date();
    return today.toLocaleTimeString();
};