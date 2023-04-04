import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <Hero />
        <div className="
          bg-white
          rounded-3xl
          border-solid
          border-gg-dark-green
          border-8
          p-2
          m-2
          mx-24
        ">
          <div className="
            text-gg-ocean-green
            font-black
            text-3xl
            bg-gg-light-gray
            rounded-3xl
            border-8
            border-gg-dark-green
            p-8
            w-fit
            mx-auto
            -translate-y-12
            uppercase
          ">Drop us a line</div>
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            className="mx-12"
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor={"name"}>
                Name
              </label>
              <div className="control">
                <input
                  className="
                    bg-gg-light-gray
                    rounded-lg
                    border-4
                    border-gg-dark-green
                    w-full
                  "
                  type={"text"}
                  name={"name"}
                  onChange={this.handleChange}
                  id={"name"}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={"email"}>
                Email
              </label>
              <div className="control">
                <input
                  className="
                    bg-gg-light-gray
                    rounded-lg
                    border-4
                    border-gg-dark-green
                    w-full
                  "
                  type={"email"}
                  name={"email"}
                  onChange={this.handleChange}
                  id={"email"}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={"message"}>
                Message
              </label>
              <div className="control">
                <textarea
                  className="
                    bg-gg-light-gray
                    rounded-lg
                    border-4
                    border-gg-dark-green
                    w-full
                  "
                  name={"message"}
                  onChange={this.handleChange}
                  id={"message"}
                  required={true}
                />
              </div>
            </div>
            <button className="
              bg-gg-light-gray
              rounded-lg
              border-4
              border-gg-dark-green
              w-fit
              mx-auto
              p-2
            " type="submit">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}
