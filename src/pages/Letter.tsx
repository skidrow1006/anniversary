import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Letter.css';

const Letter: React.FC = () => {
  return (
    <div className="letter-page">
      <div className="letter-container">
        <div className="letter-header">
          <FaHeart className="letter-heart" />
          <h2 className="letter-title">A Letter to You</h2>
        </div>

        <div className="letter-body">
          <p className="letter-salutation">My Love,</p>

          <p>
            From the very first moment I saw you, I knew something had shifted — like the universe quietly rearranged itself to make room for us. What started as a feeling I couldn't quite name became the clearest, most certain thing in my life.
         Happyyyy 8th anniversary 🥳🥳🥳🥳🎂🎂🎂🎂🎂. It's still surreal to me ki hume itne saaalll ho gaye saath mein and life has been just amazinggg with you. Tune mujhe mere bas times mein uplift and you are a very big reason of what I am today. I mean this relationship has been one of the best parts of my life. Ik main abhi bhi bhondu sa hun thoda 🫠 pr koi na ho bhi hun aapka hi hun 😘. Ab iss saal ho skta hai ki meri life mein ek naya bada step aaye and ik thoda mushkil hoga humare liye but I'm sure ki hum log usme bhi aaram se adjust krke kahin na kahin se kuch toh best situation nikal hi lenge. Aur chahe main jitna bhi durr hun, you will always be in my thoughts and my prayers. I hope tu jaise abhi padhai wise grow kr rhi hai krti reh. I can't wait to meet you 😭😭😭. Happy anniversary to my cutie patootie 😘❤️😘❤️😘❤️😘.
         </p>

          <p className="letter-closing">
            With all my love, always.
          </p>

          <div className="letter-signature">
            <FaHeart className="signature-heart" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Letter;
