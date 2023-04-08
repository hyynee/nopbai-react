import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <section className="item">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <div>
                    <img
                      src=""
                      alt=""
                      className="w-100"
                      style={{ height: 120 }}
                    />
                  </div>
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="bi bi-collection"></i>
                  </div>
                  <h2 className="text-center fw-bold">Fresh new layout</h2>
                  <p className="text-center">
                    With Bootstrap 5, we've created a fresh <br></br> new layout
                    for this template!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <div>
                    <img src="" alt="" className="w-100" style={{ height: 120 }} />
                  </div>
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="bi bi-cloud-download"></i>
                  </div>
                  <h2 className="text-center fw-bold">Free to download </h2>
                  <p className="text-center">
                    As always, Start Bootstrap has a <br /> powerful collectin
                    of free templates.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <div>
                    <img src="" alt="" className="w-100" style={{ height: 120 }} />
                  </div>
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="bi bi-card-heading"></i>
                  </div>
                  <h2 className="text-center fw-bold">Jumbotron hero header</h2>
                  <p className="text-center">
                    The heroic part of this template is the <br /> jumbotron
                    hero header!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ paddingTop: 40 }}>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <div>
                    <img src="" alt="" className="w-100" style={{ height: 120 }} />
                  </div>
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="bi bi-bootstrap"></i>
                  </div>
                  <h2 className="text-center fw-bold">Feature boxes</h2>
                  <p className="text-center">
                    We've created some custom feature <br /> boxes using
                    Bootstrap icons!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <div>
                    <img src="" alt="" className="w-100" style={{ height: 120 }} />
                  </div>
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="bi bi-code"></i>
                  </div>
                  <h2 className="text-center fw-bold">A name you trust</h2>
                  <p className="text-center">
                    We keep our dependencies up to date <br /> and squash bugs
                    as they come!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <div>
                    <img src="" alt="" className="w-100" style={{ height: 120 }} />
                  </div>
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                    <i class="bi bi-patch-check"></i>
                  </div>
                  <h2 className="text-center fw-bold">Simple clean code </h2>
                  <p className="text-center">
                    Start Bootstrap has been the leader in <br></br> free
                    Bootstrap templates since 2013!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
