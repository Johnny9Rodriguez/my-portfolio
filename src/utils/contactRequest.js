export const sendMessage = async (message) => {
    const requestData = {
        RecipientName: 'Joe',
        RecipientAddress: 'contact@joepytlik.de',
        Subject: 'Contact - Portfolio',
        Name: message.name,
        Address: message.address,
        Message: message.message,
    };

    try {
        const res = await fetch(
            'https://joepytlik.de/services/api/mail/contact',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            }
        );

        if (!res.ok) {
            console.error(res.status);
        } else {
            console.log(res.status);
        }

        return { status: res.status };
    } catch (error) {
        console.error(error);
    }
};
