import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact </h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.9589868217258!2d77.32409253864233!3d28.57222574948229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e94a2663f%3A0x96317734f1be41f7!2sNoida%20Sector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1692802800376!5m2!1sen!2sin"
          width="50%" 
          height="450" 
          style={{border:0}}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>


          <div className="container">
            <div className="contact-form ">
              <form action="https://formspree.io/f/xbjvokeo" method="POST" className="contact-inputs">
                <input type="text" placeholder="username" name="username" required autoComplete="off"/>
                <input type="email" placeholder="Email" name="email" required autoComplete="off"/>
                <textarea name="message" placeholder="Enter your  message" cols="30" rows="10"></textarea>
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
    </Wrapper>
  )
};

export default Contact;
