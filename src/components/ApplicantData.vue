<template>
  <div class="applicant-data">

    <div class="info-wrapper">
      <div class="info-box">
        <h3 class="applicant-name">{{ applicantInfo.applicantName }}</h3>
        <p class="applicant-position">{{ applicantInfo.applicantPosision }}</p>
        <p class="applicant-about">
          {{ applicantInfo.applicantAbout }}
        </p>
        <ul class="list-inline about-list">
          <li class="list-inline-item">
            <h3>Experience</h3>
            <p>{{ applicantInfo.experiance }}</p>
          </li>
          <li class="list-inline-item">
            <h3>Industry</h3>
            <p>{{ applicantInfo.industry }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="contact-wrapper">
      <div class="contact-box">
        <h3>Contact</h3>
        <ul class="contacts-list list-unstyled">
          <li>
            <span class="icon-box">
              <img src="../assets/images/svgs/shape.svg" class="img-fluid" alt="location"/>
            </span>
            <span class="contact-txt">{{ applicantInfo.contacts.location }}</span>
          </li>
          <li>
            <span class="icon-box">
              <img src="../assets/images/svgs/phone.svg" class="img-fluid" alt="location"/>
            </span>
            <a :href="'tel:/' + applicantInfo.contacts.phone" class="contact-txt">{{ applicantInfo.contacts.phone }}</a>
          </li>
          <li>
            <span class="icon-box">
              <img src="../assets/images/svgs/mail.svg" class="img-fluid" alt="location"/>
            </span>
            <a :href="'mailto:' + applicantInfo.contacts.email" class="contact-txt">{{ applicantInfo.contacts.email }}</a>
          </li>
          <li>
            <span class="icon-box">
              <img src="../assets/images/svgs/internet.svg" class="img-fluid" alt="location"/>
            </span>
            <a :href="applicantInfo.contacts.website" class="contact-txt" target="_blank">{{ applicantInfo.contacts.website }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="download-cv">
      <a :href="applicantInfo.cvUrl">Download CV</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ApplicantData',
  props: ["applicantInfo"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.applicant-data {
  padding-left: 70px;
}
.info-wrapper {
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: -3px;
    width: calc(100% + 4px);
    height: 46px;
    border-radius: 14px;
    background-color: #ffdc00;
  }
  .info-box {
    background: #FFF;
    padding: 19px 9px 24px 14px;
    border-radius: 14px;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }
  .applicant-name {
    font-size: 21px;
    font-weight: bold;
    color: #0a1f44;
  }
  .applicant-position {
    font-size: 17px;
    color: #000;
    margin-bottom: 10px;
  }
  .applicant-about {
    font-size: 14px;
    color: #484848;
    margin-bottom: 15px;
  }
  .about-list {
    margin: 0;
    li {
      width: 50%;
      margin: auto;
    }
    h3 {
      font-size: 18px;
      color: #000;
      margin-bottom: 5px;
    }
    p {
      margin-bottom: 0;
      font-size: 16px;
      color: #040404;
    }
  }
}

.contact-wrapper {
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: -3px;
    width: calc(100% + 4px);
    height: 46px;
    border-radius: 14px;
    background-color: #ffdc00;
  }
  .contact-box {
    background: #FFF;
    padding: 20px 15px;
    border-radius: 14px;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }
  h3 {
    font-size: 21px;
    color: #000;
    margin-bottom: 11px;
  }
  .contacts-list {
    margin-bottom: 0;
    li {
      display: flex;
      align-items: center;
      padding: 8px 0;
    }
    .icon-box {
      flex: 0 0 14px;
      width: 14px;
      text-align: center;
    }
    .contact-txt {
      padding-left: 10px;
      color: #040404;
      font-size: 15px;
      text-decoration: none;
    }
    a {
      transition: all 0.25s ease-in-out;
      &:hover {
        color: #073e8c;
        text-decoration: underline;
      }
    }
  }
}

.download-cv {
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: -3px;
    width: calc(100% + 4px);
    height: 46px;
    border-radius: 14px;
    background-color: #f20000;
  }
  a {
    position: relative;
    z-index: 1;
    background: #FFF;
    display: block;
    padding: 16px;
    border-radius: 14px;
    font-size: 18px;
    color: #000;
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    &:hover {
      color: #073e8c;
      text-decoration: underline;
    }
  }
}
</style>
