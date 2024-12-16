import './style.css'
import {FC} from 'react'

const Resume: FC = function () {
  return (
    <>
      <section className="history">
        <div className="wrapper-history">
          <div className="ten-vh-divider" />
          <h2 className="bigger-title">complete resume</h2>

          <div className="resume-item">
            <div className="resume-title">System development, Infid AB</div>
            <div className="resume-timestamp">May 2024 - Current</div>
            <div className="resume-text">
              Planning, management of development for web applications. Focus on
              back end, DevOps, code review, and project management.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-title">
              Java development, Nackademin yrkeshögskola
            </div>
            <div className="resume-timestamp">August 2022 - June 2024</div>
            <div className="resume-text">
              Multifaceted education with a focus on test-driven development of
              Java. As well as front end, database technology, functional
              programming and devops.
            </div>
            {/* <br /> */}
            {/* <div> */}
            {/* These where my courses at <a href="../nackademin">Nackademin</a>{' '} */}
            {/* (in swedish) */}
            {/* </div> */}
          </div>

          <div className="resume-item">
            <div className="resume-title">
              Programming 1 - Python, Åsö Vuxengymnasium
            </div>
            <div className="resume-timestamp">March 2022 - June 2022</div>
            <div className="resume-text" />
          </div>

          <div className="resume-item">
            <div className="resume-title">
              Treasurer, Tyresö Ju-jutsu sports organisation
            </div>
            <div className="resume-timestamp">April 2019 - July 2022</div>
            <div className="resume-text">Founding member.</div>
          </div>

          <div className="resume-item">
            <div className="resume-title">Service technician, Mekina AB</div>
            <div className="resume-timestamp">
              September 2019 - Current (on study leave)
            </div>
            <div className="resume-text">
              Responsible for calibration of customer tools, including starting
              up the calibration business within the company. Also helped out in
              the store counter and warehouse receiving and posting packages.
              Setting up network during relocation and NAT servers for the
              company.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-title">Service technician, Swedol AB</div>
            <div className="resume-timestamp">
              December 2015 - September 2019
            </div>
            <div className="resume-text">
              Repaired different types of tools from the Swedol catalog. Rotary
              lasers, electric generators & compressors etc. Responsible for
              calibration of customer tools. Relocated to Mekina due to
              reorganization
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-title">Naturentreprenader AB</div>
            <div className="resume-timestamp">
              September 2015 - November 2015
            </div>
            <div className="resume-text">
              Employment ended early due to unstable market.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-title">Mio Möbler</div>
            <div className="resume-timestamp">June 2015 - September 2015</div>
            <div className="resume-text">Part time summer job.</div>
          </div>

          <div className="resume-item">
            <div className="resume-title">Aluscand</div>
            <div className="resume-timestamp">June 2015 - December 2015</div>
            <div className="resume-text">
              Time set employment due to my plans to relocate to continental
              Europe during 2016. Worked the factory floor manufacturing glass
              slide panels. For example the smoking booths at Arlanda.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-title">
              Internship, SVT department of sound processing
            </div>
            <div className="resume-timestamp">November 2014</div>
            <div className="resume-text">
              Usually reserved for students at Luleå Tekniska Universitet. Sit
              alongs during mixing as well as mixing a few show episodes by
              myself.
            </div>
            <div className="resume-text">Also coffee bringer.</div>
          </div>

          <div className="resume-item">
            <div className="resume-title">Internship Klarateatern</div>
            <div className="resume-timestamp">May 2014</div>
            <div className="resume-text">
              Interned as an extra hand for the sound technician. Arranged
              microphones, and controlled background music as well as the mixer.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-title">Ica Sickla</div>
            <div className="resume-timestamp">June 2014 - June 2015</div>
            <div className="resume-text">
              My first job where I had a great mentor that guided me into my
              working life.
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-title">
              Nacka Upper Secondary School - Music production
            </div>
            <div className="resume-timestamp">August 2011 - June 2014</div>
            <div className="resume-text">
              Music production with focus on studio recording and live audio.
              Received scholarship for being an especially meritorious student.
            </div>
          </div>

          <div className="three-vh-divider" />
        </div>
      </section>
    </>
  )
}

export default Resume
