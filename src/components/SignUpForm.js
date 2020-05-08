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
            <div>
              <p className="contract">
                1. NATURE OF SERVICES: <br />
                Grindz ToGo, LLC’s nature of business is to provide online
                marketing services to restaurants and other various outside
                vendors for the purposes of increasing a restaurant’s or outside
                vendor’s individual monthly gross sales and market visibility.
                For such successfully generated orders, Grindz ToGo, LLC charges
                sales commission(s). Grindz ToGo, LLC openly works alongside
                many restaurants and vendors across many cuisines and areas of
                business. Grindz ToGo, LLC conducts targeted marketing campaigns
                promoting all or some of their associated restaurants or
                vendors. These services can include but are not limited to,
                print, television, radio, and online advertising campaigns of
                any kind. Grindz ToGo, LLC aims to market and promote client
                brands in innovative and new ways, and in a manner which Grindz
                ToGo, LLC and its directors deem appropriate. This agreement
                acknowledges and permits Grindz ToGo, LLC to use the Restaurant
                brand and name for the above stated purposes.
              </p>
              <p className="contract">
                2. TERM: <br />
                The term of this agreement shall automatically renew on the
                first day of each month. This agreement is ongoing from the
                initial signing date. Cancellation must be served in writing
                with minimum thirty (30) days notice, unless a mutually
                agreeable cancellation date cannot be determined by both
                parties. Restaurant may be liable for any outstanding marketing
                obligations, should such obligations extend to a date beyond the
                cancellation date. No other fees apply to cancellation by either
                party.
              </p>
              <p className="contract">
                3. ONLINE MARKETING AGREEMENT: <br />
                Grindz ToGo, LLC shall host and make public Restaurant’s menu
                and other products. Grindz ToGo, LLC is not liable or
                responsible for the public perception of Restaurant, positive or
                negative, related or unrelated to this agreement. Grindz ToGo,
                LLC shall provide customer support via public email and online
                chat during regular business hours to assist with customer
                information and questions related to process of generating sales
                for Restaurant. Grindz ToGo, LLC and its directors shall
                determine, in its best interest, the hours in which these
                services are offered, and reserve the right to make future
                changes at any moment without notice. Grindz ToGo, LLC will
                provide e-commerce support and capabilities for the Restaurant
                at all times, when possible. Grindz ToGo, LLC does not warrant
                the site has 100% uptime, nor shall it be held liable should the
                site malfunction for any reason. Grindztogo.com is a portal
                connecting users to individual restaurants who voluntarily agree
                to participate. Grindz ToGo, LLC reserves the right to sell any
                outside products they wish alongside Restaurant product(s).
                <br />
                <br />
                i. TAKEOUT SALES All payments under this method are processed by
                Grindz ToGo, LLC on behalf of Restaurant. If these services are
                selected, given the cost associated with the maintenance of this
                business model, Marketing Agent shall earn a sales commission of
                15 % of the gross delivery sales for any and all restaurants
                items sold through or by Grindz ToGo, LLC.
              </p>
              <p className="contract">
                4. PAYMENT: <br />
                Marketing Agent shall remit payment, less or including any
                earned commissions, taxes, charges, fines, liabilities, on the
                first day of each month, for the previous month’s sales for any
                and all Restaurant or Vendor items sold through or by Grindz
                ToGo, LLC. This payment shall be made in the form of a check. A
                grace period of five (5) business days shall be granted to
                Grindz ToGo, LLC. For all revenue and monies accepted and
                collected or processed by Grindz ToGo, LLC either via merchant
                services or cash payments, Grindz ToGo, LLC shall be responsible
                for all applicable state and local general excise taxes, in
                full, for each month.
              </p>
              <p className="contract">
                5. RESTAURANT TERMS OF SERVICE: <br />
                Restaurant will abide by agreement and cook, prepare, and/or
                sort sales/orders generated by Grindz ToGo, LLC in accordance
                with the individual restaurant guidelines detailed on Exhibit A
                “Restaurant Profile & Hours”. Restaurant will alert Grindz ToGo,
                LLC in reasonable time to sold-out items, early closures, and
                other operational information that directly effects Grindz ToGo,
                LLC’s nature of business and their ability to provide the
                services described herein. Restaurant is liable and accountable
                for the taste and presentation of final product and food. This
                includes but is not limited to the inclusion or exclusion of any
                items, marketing collateral, and other optional materials the
                restaurant wishes their consumers to have. Marketing Agent is
                not responsible to provide any items and is in no way
                responsible nor guarantees customer satisfaction in any manner.
                Restaurant will not prioritize or differentiate takeout orders
                submitted by Grindz ToGo, LLC from orders generated directly by
                the restaurant or vendor, or by other means, nor give priority
                to patrons currently conducting business within their
                establishment(s).
              </p>
              <p className="contract">
                6. MARKETING MATERIALS AND USE RELEASE: <br />
                By entering this agreement, restaurant agrees to release to
                Grindz ToGo, LLC, for the entire term of this agreement, the
                right to utilize the Restaurant logo, image, brand, likeness,
                name, menu, items, general information and other materials
                submitted at any point to Grindz ToGo, LLC for any reason, for
                use in targeted marketing campaigns, at the sole direction of
                Grindz ToGo, LLC, to promote none, any, or all restaurants,
                including but not limited to the restaurant for which this
                particular agreement pertains, including general take-out sales,
                generated by Grindz ToGo, LLC via any means, and generally for
                the benefit of Restaurant, as determined by Grindz ToGo, LLC.
                Restaurant will hold harmless Grindz ToGo, LLC and its directors
                for all damages or consequences resulting from any use or misuse
                of the Restaurant image, brand, or name, when used for the
                purposes of this agreement.
              </p>
            </div>
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
  width: 100%;
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
