import React, { useEffect, useState } from 'react';
import { IoMdPerson } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import * as EmailValidator from 'email-validator';
import { CgSpinner } from 'react-icons/cg';
import { sendMessage } from '../utils/contactRequest';

const InputField = ({ placeholder, value, onChange }) => {
    return (
        <input
            type='text'
            placeholder={placeholder}
            className='flex-grow text-[#white] border-2 border-transparent focus:border-[#0ce6f2] bg-[#203562]/60 px-2 py-2 rounded-xl outline-none placeholder-[#0098db]'
            value={value}
            onChange={onChange}
            spellCheck={false}
        />
    );
};

function ContactPage() {
    const [opacity, setOpacity] = useState(0);
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        setOpacity(100);
    }, []);

    const updateName = (e) => {
        const newName = e.target.value;
        setName(newName);
        setSuccess('');
        setError('');
    };

    const updateMail = (e) => {
        const newMail = e.target.value.trim(' ');
        setMail(newMail);
        setSuccess('');
        setError('');
    };

    const updateMessage = (e) => {
        const newMessage = e.target.value;
        setMessage(newMessage);
        setSuccess('');
        setError('');
    };

    const handleSend = async () => {
        if (isSending) return;

        if (name.trim(' ') === '') {
            setSuccess('');
            setError('Please enter a name.');
            return;
        }

        if (!EmailValidator.validate(mail)) {
            setSuccess('');
            setError('Please enter a correct e-mail.');
            return;
        }

        if (message.trim(' ') === '') {
            setSuccess('');
            setError('Please enter a message.');
            return;
        }

        setIsSending(true);
        const response = await sendMessage({ name, address: mail, message });
        setIsSending(false);

        if (response.status === 200) {
            setSuccess('Mail sent successfully!');
            setName('');
            setMail('');
            setMessage('');
            setError('');
        } else {
            setSuccess('');
            setError(
                'Error: Please try again later. Alternatively send an E-Mail to contact@joepytlik.de'
            );
        }
    };

    return (
        <div className='w-full pb-8 xl:pt-8 px-2 flex flex-col gap-4 items-center'>
            <div
                className='relative z-10 p-4 max-w-[800px] w-full flex flex-col gap-4 bg-black/60 rounded-xl'
                style={{
                    opacity: opacity,
                    transition: 'opacity 0.7s ease',
                }}
            >
                <div className='text-3xl'>CONTACT</div>
                <div className='w-full h-1 bg-gradient-to-r from-[#0098db] to-[#0ce6f2]' />
                <div className='flex gap-4 items-center'>
                    <IoMdPerson className='text-2xl' />
                    <InputField
                        placeholder={'Name'}
                        value={name}
                        onChange={updateName}
                    />
                </div>{' '}
                <div className='flex gap-4 items-center'>
                    <IoMdMail className='text-2xl' />
                    <InputField
                        placeholder={'E-Mail'}
                        value={mail}
                        onChange={updateMail}
                    />
                </div>
                <textarea
                    className='outline-none text-white bg-[#203562]/60 focus:border-[#0ce6f2] border-2 border-transparent placeholder-[#0098db] px-2 py-2 resize-none rounded-xl'
                    spellCheck={false}
                    rows={10}
                    value={message}
                    onChange={updateMessage}
                    placeholder='Enter your message.'
                />
                <div className='flex justify-between'>
                    <div>
                        <div className='flex-1 text-[#0ce6f2]'>{success}</div>
                        <div className='flex-1 text-red-500'>{error}</div>
                    </div>
                    <button
                        className='w-24 h-8 flex justify-center items-center self-end bg-[#0098db] hover:cursor-pointer hover:bg-[#0ce6f2] rounded-xl'
                        onClick={handleSend}
                    >
                        {!isSending && 'Send'}
                        {isSending && (
                            <CgSpinner className='text-2xl animate-spin' />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
