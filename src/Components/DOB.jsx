const DOB = ({ date }) => {
    const DOB = new Date(date); // Replace with your actual DOB (yyyy-mm-dd)
    const today = new Date();

    let age = today.getFullYear() - DOB.getFullYear();
    const m = today.getMonth() - DOB.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < DOB.getDate())) {
        age--;
    }
    return age
}

export default DOB