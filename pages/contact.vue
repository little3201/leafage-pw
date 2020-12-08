<template>
  <section class="main-content">
    <div class="container-fluid p-0">
      <div class="contact-sec">
        <div class="cont-img">
          <img src="images/resources/contact-bg.jpg" alt="" />
        </div>
        <div class="cont-form-sec">
          <h3>Contact</h3>
          <p>
            Cras lobortis vehicula ugue, sagitts oe sapien lacinia non. Fusce
            semper lobortis massa in fringilla. Quisque vitae sapien
            pelletesque, mollis nte sit amet, aliquet tortor. Integer tincidunt
            molestie semper. Nam turpis nibh, accumsan et.
          </p>
          <form>
            <div class="form-field">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div class="form-field">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div class="form-field">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div class="form-field">
              <textarea name="message" placeholder="Your Message"></textarea>
            </div>
            <input type="submit" name="submit" value="Send Message" />
          </form>
        </div>
        <!--cont-form-sec end-->
        <div class="clearfix"></div>
      </div>
      <!--contact-sec end-->
    </div>
  </section>
</template>