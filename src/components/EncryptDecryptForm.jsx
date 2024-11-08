import {useState} from 'react'
import '../App.css'
import axios from 'axios';

function EncryptDecryptForm() {
    const [textToEncrypt, setTextToEncrypt] = useState('');
    const [encryptedText, setEncryptedText] = useState('');
    const [textToDecrypt, setTextToDecrypt] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const handleEncrypt = async () => {
        console.log('Encrypt button clicked');
        try {
            const response = await axios.post('http://localhost:20000/encrypt', {
                input: textToEncrypt
            });
            setEncryptedText(response.data.encryptedText);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDecrypt = async () => {
        console.log('Decrypt button clicked');
        try {
            const response = await axios.post('http://localhost:20000/decrypt', {
                input: textToDecrypt
            });
            setDecryptedText(response.data.decryptedText);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="app-container">
            <div className="encryption-container">
                <h1>Text Encryption</h1>
                <textarea
                    type="text"
                    placeholder="Enter any text to be Encrypted"
                    value={textToEncrypt}
                    onChange={(e) => setTextToEncrypt(e.target.value)}
                    rows={10}
                    cols={20}
                />
                <textarea
                    type="text"
                    placeholder="Encrypted text will appear here"
                    value={encryptedText}
                    readOnly
                    rows={10}
                    cols={20}
                />
                <p>Click the button to encrypt the text</p>
                <button className="encrypt-button" onClick={handleEncrypt}>Encrypt</button>
            </div>

            <div className="decryption-container">
                <h1>Text Decryption</h1>
                <textarea
                    type="text"
                    placeholder="Enter any text to be Decrypted"
                    value={textToDecrypt}
                    onChange={(e) => setTextToDecrypt(e.target.value)}
                    rows={10}
                    cols={20}
                />
                <textarea
                    type="text"
                    placeholder="Decrypted  text will appear here"
                    value={decryptedText}
                    readOnly
                    rows={10}
                    cols={20}
                />
                <p>Click the button to decrypt the text</p>
                <button className="decrypt-button" onClick={handleDecrypt}>Decrypt</button>
            </div>
        </div>
    );
}

export default EncryptDecryptForm
