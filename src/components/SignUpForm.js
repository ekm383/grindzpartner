import React from "react"
import styled from "styled-components"

const SignUpForm = () => {
  return (
    <FormWrapper>
      <form
        name="signup"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="signup" />
        <li id="hidden">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </li>
        <h6>Personal Information</h6>
        <ul className="form-list">
          <li className="form-list__row">
            <label htmlFor="name">
              Name:
              <input id="name" type="text" name="name" required="true" />
            </label>
          </li>
          <li className="form-list__row">
            <label htmlFor="email">
              Email Address:
              <input id="email" type="text" name="email" required="true" />
            </label>
          </li>
          <li className="form-list__row">
            <label htmlFor="phone">
              Phone Number:
              <input id="phone" type="tel" name="phone" required="true" />
            </label>
          </li>
        </ul>

        <h6>Business Information</h6>
        <ul className="form-list">
          <li className="form-list__row">
            <label htmlFor="bizname">
              Business Name:
              <input id="bizname" type="text" name="bizname" required="true" />
            </label>
          </li>
          <li className="form-list__row">
            <label htmlFor="bizaddress">
              Business Address:
              <input
                id="bizaddress"
                type="text"
                name="bizaddress"
                required=""
              />
            </label>
          </li>
          <li className="form-list__row">
            <label htmlFor="bizphone">
              Phone Number:
              <input id="bizphone" type="tel" name="bizphone" required="true" />
            </label>
          </li>
          <li className="form-list__row">
            <label htmlFor="bizwebsite">
              Website:
              <input id="bizwebsite" type="tel" name="bizwebsite" required="" />
            </label>
          </li>
          <li className="form-list__row">
            <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
              Does your site need an update?
            </p>
            <br />
            <div style={{ display: "flex" }}>
              <label htmlFor="yes">
                Yes
                <input type="radio" id="yes" name="newwebsite" value="yes" />
              </label>
              <label htmlFor="no">
                No
                <input type="radio" id="no" name="newwebsite" value="no" />
              </label>
            </div>
          </li>
          <li className="form-list__row">
            <label htmlFor="checks">
              What address would you like monthly checks to be mailed to?
              <input id="checks" type="text" name="checks" required="" />
            </label>
          </li>
          <li className="form-list__row">
            <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
              Do you agree to all terms and conditions?
            </p>
            <p className="contract">
              Terms and Conditions for grindz to go Introduction These Website
              Standard Terms and Conditions written on this webpage shall manage
              your use of our website, grindz partner accessible at
              grindzpartner.com. These Terms will be applied fully and affect to
              your use of this Website. By using this Website, you agreed to
              accept all terms and conditions written in here. You must not use
              this Website if you disagree with any of these Website Standard
              Terms and Conditions. These Terms and Conditions have been
              generated with the help of the Terms And Conditions Template and
              the Terms and Conditions Generator. Minors or people below 18
              years old are not allowed to use this Website. Intellectual
              Property Rights Other than the content you own, under these Terms,
              grindz to go and/or its licensors own all the intellectual
              property rights and materials contained in this Website. You are
              granted limited license only for purposes of viewing the material
              contained on this Website. Restrictions You are specifically
              restricted from all of the following: publishing any Website
              material in any other media; selling, sublicensing and/or
              otherwise commercializing any Website material; publicly
              performing and/or showing any Website material; using this Website
              in any way that is or may be damaging to this Website; using this
              Website in any way that impacts user access to this Website; using
              this Website contrary to applicable laws and regulations, or in
              any way may cause harm to the Website, or to any person or
              business entity; engaging in any data mining, data harvesting,
              data extracting or any other similar activity in relation to this
              Website; using this Website to engage in any advertising or
              marketing. Certain areas of this Website are restricted from being
              access by you and grindz to go may further restrict access by you
              to any areas of this Website, at any time, in absolute discretion.
              Any user ID and password you may have for this Website are
              confidential and you must maintain confidentiality as well. Your
              Content In these Website Standard Terms and Conditions, "Your
              Content" shall mean any audio, video text, images or other
              material you choose to display on this Website. By displaying Your
              Content, you grant grindz to go a non-exclusive, worldwide
              irrevocable, sub licensable license to use, reproduce, adapt,
              publish, translate and distribute it in any and all media. Your
              Content must be your own and must not be invading any
              third-party’s rights. grindz to go reserves the right to remove
              any of Your Content from this Website at any time without notice.
              Your Privacy Please read Privacy Policy. No warranties This
              Website is provided "as is," with all faults, and grindz to go
              express no representations or warranties, of any kind related to
              this Website or the materials contained on this Website. Also,
              nothing contained on this Website shall be interpreted as advising
              you. Limitation of liability In no event shall grindz to go, nor
              any of its officers, directors and employees, shall be held liable
              for anything arising out of or in any way connected with your use
              of this Website whether such liability is under contract. grindz
              to go, including its officers, directors and employees shall not
              be held liable for any indirect, consequential or special
              liability arising out of or in any way related to your use of this
              Website. Indemnification You hereby indemnify to the fullest
              extent grindz to go from and against any and/or all liabilities,
              costs, demands, causes of action, damages and expenses arising in
              any way related to your breach of any of the provisions of these
              Terms. Severability If any provision of these Terms is found to be
              invalid under any applicable law, such provisions shall be deleted
              without affecting the remaining provisions herein. Variation of
              Terms grindz to go is permitted to revise these Terms at any time
              as it sees fit, and by using this Website you are expected to
              review these Terms on a regular basis. Assignment The grindz to go
              is allowed to assign, transfer, and subcontract its rights and/or
              obligations under these Terms without any notification. However,
              you are not allowed to assign, transfer, or subcontract any of
              your rights and/or obligations under these Terms. Entire Agreement
              These Terms constitute the entire agreement between grindz to go
              and you in relation to your use of this Website, and supersede all
              prior agreements and understandings. Governing Law & Jurisdiction
              These Terms will be governed by and interpreted in accordance with
              the laws of the State of us, and you submit to the non-exclusive
              jurisdiction of the state and federal courts located in us for the
              resolution of any disputes.
            </p>

            <br />
            <div style={{ display: "flex" }}>
              <label htmlFor="agree">
                agree
                <input type="radio" id="agree" name="terms" value="agree" />
              </label>
              <label htmlFor="disagree">
                No
                <input
                  type="radio"
                  id="disagree"
                  name="terms"
                  value="disagree"
                />
              </label>
            </div>
          </li>
          <li>
            <button type="submit" className="button">
              sign up
            </button>
          </li>
        </ul>
      </form>
    </FormWrapper>
  )
}

const FormWrapper = styled.div`
  width: 80%;
  padding-bottom: 4rem;
  h6 {
    font-size: 1rem;
    margin: 0rem 0rem 1rem 0rem;
  }
  #cars {
    width: 50%;
    height: 30px;
    margin-top: 1rem;
  }

  #hidden {
    display: none;
  }
  /* .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  } */
  .contract {
    height: 100px;
    overflow: scroll;
    font-size: 8px;
    line-height: 0.8rem;
    margin: 10px 0px;
  }
  .button {
    color: #ffffff;
    background-color: var(--mainColor);
    padding: 12px 25px;
    margin-top: 1.5rem;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 0;
    border-radius: 50px;
    outline: 0;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.2s;
  }
  .button:hover,
  .button:active,
  .button:focus {
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }

  .button--transparent {
    background: transparent;
    border: 0;
    outline: 0;
  }

  .button--close {
    position: absolute;
    top: 10px;
    left: 10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: #ffffff;
    border-radius: 50%;
    transition: all 0.25s;
    z-index: 10;
  }
  .button--close svg {
    width: 20px;
    height: 20px;
  }
  .button--close svg * {
    fill: currentColor;
  }
  .button--close:hover,
  .button--close:active,
  .button--close:focus {
    color: #fbcf34;
    background-color: #ffffff;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);
  }

  .button--info {
    position: absolute;
    top: 0;
    right: 0;
  }

  input {
    width: calc(100% - 10px);
    min-height: 30px;
    padding-left: 5px;
    padding-right: 5px;
    letter-spacing: 0.5px;
    border: 0;
    border-bottom: 1px solid #f0f0f0;
  }
  input:valid {
    border-color: var(--mainColor);
  }
  input:focus {
    outline: none;
    border-color: var(--mainColor);
  }

  .form-list {
    padding-left: 0;
    list-style: none;
  }
  .form-list__row {
    margin-bottom: 25px;
  }
  .form-list__row label {
    position: relative;
    display: block;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 11px;
    margin-right: 10px;
    color: var(--gray);
  }
  .form-list__row--inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .form-list__row--inline > :first-child {
    -ms-flex: 2;
    flex: 2;
    padding-right: 20px;
  }
  .form-list__row--inline > :nth-child(2n) {
    -ms-flex: 1;
    flex: 1;
  }
  .form-list__input-inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .form-list__input-inline > * {
    width: calc(50% - 10px - 10px);
  }
  .form-list__row--agree {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 12px;
  }
  .form-list__row--agree label {
    font-weight: 400;
    text-transform: none;
    color: #676767;
  }
  .form-list__row--agree input {
    width: auto;
    margin-right: 5px;
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
`

export default SignUpForm
