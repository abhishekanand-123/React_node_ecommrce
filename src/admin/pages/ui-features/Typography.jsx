import React from "react";

const Typography = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <h3 className="page-title">Typography</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">UI Elements</li>
            <li className="breadcrumb-item active">Typography</li>
          </ol>
        </nav>
      </div>

      <div className="row">

        {/* HEADINGS */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Headings</h4>
              <div className="template-demo">
                <h1>h1. Heading</h1>
                <h2>h2. Heading</h2>
                <h3>h3. Heading</h3>
                <h4>h4. Heading</h4>
                <h5>h5. Heading</h5>
                <h6>h6. Heading</h6>
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY TEXT */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Headings with secondary text</h4>
              <div className="template-demo">
                <h1>Heading <small className="text-muted">Secondary text</small></h1>
                <h2>Heading <small className="text-muted">Secondary text</small></h2>
                <h3>Heading <small className="text-muted">Secondary text</small></h3>
              </div>
            </div>
          </div>
        </div>

        {/* DISPLAY HEADINGS */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Display headings</h4>
              <h1 className="display-1">Display 1</h1>
              <h1 className="display-2">Display 2</h1>
              <h1 className="display-3">Display 3</h1>
              <h1 className="display-4">Display 4</h1>
            </div>
          </div>
        </div>

        {/* PARAGRAPH */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Paragraph</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCKQUOTE */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Blockquote</h4>
              <blockquote className="blockquote">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* TEXT COLORS */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Text colors</h4>
              <p className="text-primary">.text-primary</p>
              <p className="text-success">.text-success</p>
              <p className="text-danger">.text-danger</p>
              <p className="text-warning">.text-warning</p>
              <p className="text-info">.text-info</p>
            </div>
          </div>
        </div>

        {/* LISTS */}
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Unordered List</h4>
              <ul>
                <li>Lorem ipsum</li>
                <li>Consectetur</li>
                <li>Integer molestie</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Ordered List</h4>
              <ol>
                <li>Lorem ipsum</li>
                <li>Consectetur</li>
                <li>Integer molestie</li>
              </ol>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Typography;
