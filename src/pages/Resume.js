import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout fullMenu>
      <article id="main" className="resume">
        <header>
          <h2>Resume</h2>
          <a href="https://drive.google.com/uc?export=download&id=1WEdkketBJ-4iUr-HpcCAbgUCraw6EhKe">
              Download
            </a>
        </header>
        <section id="education" className="wrapper style5">
          <div className="inner">
            <h2>🎓 Education</h2>

            <h3> Fullstack Academy of Code | Chicago, IL | 2020 </h3>
            <p>Software Engineering Immersive</p>

            <h3>Columbia University | New York, NY | 2018 </h3>
            <p>
              M.A. in Clinical Psychology (concentrations in Research Methods
              and Global Mental Health & Trauma)
            </p>

            <h3>Columbia University | New York, NY | 2014 </h3>
            <p> B.A. in Psychology (minor in Linguistics)</p>
          </div>
        </section>
        <section id="experience" className="wrapper style5">
          <div className="inner">
            <br />
            <br />
            <h2>🏢 Experience</h2>
            <h3>Teaching Fellow | 2020</h3>
            <h6>Fullstack Academy of Code, Chicago, IL</h6>
            <p>
              • Mentor over 30 students in JavaScript fundamentals, engineering
              concepts, debugging strategies and writing clean code <br />•
              Oversee student projects as technical mentor and project manager{' '}
              <br />• Lead weekly whiteboard interview problems including
              algorithms, data structures and system design <br />• Conduct
              technical admissions interviews for prospective students
            </p>

            <h3>Human Resources Associate | 2018 - 2019 </h3>
            <h6>Chicago Food Corporation, Niles, IL</h6>
            <p>
              • Maintained personnel records, employee benefit files and
              government compliance information for 200+ employees in 4
              locations <br />• Helped launch our first 401(k) plan: researched
              retirement services, met with third party administrator and
              financial advisor to set up plan document, educated employees and
              documented employee investment portfolio for record-keeping <br />
              • Supported accounting: logged Accounts Receivable / Accounts
              Payable transactions, journal entries and fleet expenses, resolved
              discrepancies, issued checks and prepared monthly financial
              reports <br />• Supported property manangement: handled financial
              records for 8 commercial tenants, collected rent, deposits and
              fees, and tracked and reconciled Common Area Maintenance expenses
            </p>

            <h3>Helpline Associate | 2017 - 2018</h3>
            <h6>National Eating Disorders Association, New York, NY</h6>
            <p>
              • Trained/Directed 50+ Helpline volunteers and provided
              constructive feedback to ensure Helpline information is provided
              in a compassionate and professional manner <br />• Assisted
              Helpline supervision and debriefed volunteers after challenging
              calls and chats <br />•
              Compiled eating disorder information and treatment options into
              easily accessible documents for volunteers
            </p>

            <h3>Research Analyst | Summer 2016</h3>
            <h6>Boston Consulting Group | Seoul, Korea</h6>
            <p>
              • Assisted strategy consultants with providing recommendations to
              a local investment-and-securities firm on organizational
              restructuring and digitization of wealth management <br />•
              Conducted qualitative research on digital wealth management,
              focusing on automated investment services such as robo-advisors
            </p>

            <h3>Research Assistant | 2014 - 2015</h3>
            <h6>Center for Motivation & Change, New York, NY</h6>
            <p>
              • Assisted professionals treating substance use and compulsive
              behaviors by securely maintaining patient information, observing
              therapy groups and preparing notes for facilitating clinicians{' '}
              <br />• Conducted qualitative and quantitative research: patient
              assessment review, data entry and analysis using SPSS, and
              empirical literature review <br />• Received training in
              evidence-supported treatments such as motivational interviewing,
              community reinforcement approach and cognitive-behavioral therapy
            </p>

            <h3>Helpline Intern | 2014 - 2015 </h3>
            <h6>National Eating Disorders Association, New York, NY</h6>
            <p>
              • Provided information and referrals via phone calls, emails, live
              chats and social media sites and answered inquiries regarding body
              image, eating disorders and treatment <br />• Logged call and chat
              summary using Salesforce and verified details of treatment options
              such as levels of care offered and co-morbid conditions treated
            </p>
            </div>
        </section>
      </article>
    </Layout>
  );
};

export default IndexPage;
