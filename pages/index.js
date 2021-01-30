import Layout from '../components/Layout'

const Index = ({ posts, title, description, ...props }) => {

  return (
    <>
      <Layout>
        <img src="/background.jpg" /> 
        <main>
        
          <div className="items">
            <div>arc.</div>
            <div>imag.</div>
            <div>edu.</div>
          </div>

          <div className="icons">
            <a href="https://www.facebook.com/materiatriangular/"><i className="icon-facebook"></i></a>
            <a href="https://www.instagram.com/matt_arc_imag_edu/"><i className="icon-instagram"></i></a>
            <div className="contacts">
              <div>susanavassalo@materiatriangular.pt | 914 912 977</div>
              <div>paulopinto@materiatriangular.pt | 917 658 899</div>
            </div>
          </div>

        </main>
      </Layout>
      <style jsx>{`      
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }

        main {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        img {
          position: absolute;
          width: 100vw;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
          object-fit: cover;
        }

        .items {
          font-weight: 600;
          color: #feea34;
          font-size: 26px;
          margin-left: 20px;
        }

        .icons {
          
          margin: 0 20px;
          font-size: 26px;
          
        }

        a {
          text-decoration: none;
          color: #feea34;
          cursor: pointer;
        }

        .icons i:hover {
          color: white;
          transition: all ease-out .4s;
        }

        .icons i {
          margin-right: 14px;
        }

        .contacts  {
          color: #feea34;
          font-size: 12px;

          margin-top: 10px;

          line-height: 18px;
        }

        .contacts 

      `}</style>
    </>
  )
}

export default Index
