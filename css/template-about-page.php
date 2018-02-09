<?php
/*
Template Name: About page
*/
global $vyb;
?>

<?php get_header(); ?>

<div class="about-main animate-item">
    <div class="socket-i">
        <div class="about-main--desc a-fade" data-q="1.3s">
            <div class="title">
                <?php if( !empty($vyb['aboutus_top_r_heading']) ) echo $vyb['aboutus_top_r_heading']; ?>
            </div>
            <?php
                $about_top_list = $vyb['aboutus_top_r_list'];
                            if( !empty($about_top_list) ) {?>                   
            <?php foreach ( $about_top_list as $key => $value ) { ?>
                    <div class="desc-point">
                        <i><?php echo $value['aboutus_top_r_num'];?></i>
                        <?php echo $value['aboutus_top_r_list_item'];?>                   
                    </div>
                <?php } ?>              
            <?php } ?>
            <div class="text-it"><?php if( !empty($vyb['aboutus_top_r_subheading']) ) echo $vyb['aboutus_top_r_subheading']; ?></div>
        </div>

        <div class="about-main--image a-fade" data-q="1.6s">
            <div class="image-circ"></div>
            <img class="image" src="<?php if( !empty($vyb['aboutus_top_img']) ) echo $vyb['aboutus_top_img']['url']; ?>" alt="">
            <div class="about-w a-fade" data-q="1.9s">
                <div><?php if( !empty($vyb['aboutus_top_name']) ) echo $vyb['aboutus_top_name']; ?></div>
                <span><?php if( !empty($vyb['aboutus_top_position']) ) echo $vyb['aboutus_top_position']; ?></span>
            </div>
        </div>
    </div>
</div>

<div class="socket-i">

    <div class="desc-main animate-item" data-screen="0.6">
        <div class="desc-main--left a-fade" data-q="1.5s">
            <div class="title title-animate"><?php if( !empty($vyb['aboutus_what_heading']) ) echo $vyb['aboutus_what_heading']; ?></div>
            <div class="slash" data-q="0.5s"></div>
            <div class="a-fade smoke-wrap" data-q="1.7s">
                <div class="smoke smoke-fly">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/smoke-4.png" alt="">
                </div>
            </div>
        </div>
        <div class="desc-main--right a-fade" data-q="2.0s">
            <?php if( !empty($vyb['aboutus_what_text']) ) echo $vyb['aboutus_what_text']; ?>
        </div>
    </div>

    <div class="desc-main animate-item"  data-screen="1">
        <div class="desc-main--left a-fade" data-q="0.7s">
            <div class="title title-animate"><?php if( !empty($vyb['aboutus_how_heading']) ) echo $vyb['aboutus_how_heading']; ?></div>
            <div class="slash" data-q="0.9s"></div>
            <div class="a-fade smoke-wrap" data-q="1.1s">
                <div class="smoke smoke-fly">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/smoke-4.png" alt="">
                </div>
            </div>
        </div>
        <div class="desc-main--right a-fade" data-q="0.9s">
            <?php if( !empty($vyb['aboutus_how_text']) ) echo $vyb['aboutus_how_text']; ?>
        </div>
    </div>

    <div class="drop-wrap animate-item" data-q="1">
        <div class="cols">
            <div class="drop-item drop-item-b a-fade" data-q="0.6s">
                <div class="drop-btn">
                    <span><?php if( !empty($vyb['aboutus_cgi_main_title']) ) echo $vyb['aboutus_cgi_main_title']; ?></span>
                </div>

                <div class="drop">
                    <div class="cols">
                        <?php
                            $drop_cgi = $vyb['aboutus_cgi'];
                                        if( !empty($drop_cgi) ) {?>                   
                        <?php foreach ( $drop_cgi as $key => $value ) { ?>
                                <div class="drop-img" style="background-image: url(<?php echo $value['aboutus_cgi_img']['url'];?>);">
                                    <div class="title"><span><?php echo $value['aboutus_cgi_title'];?></span></div>
                                </div>
                            <?php } ?>              
                        <?php } ?>
                    </div>
                </div>
            </div>

            <div class="drop-item drop-item-b a-fade" data-q="0.8s">
                <div class="drop-btn">
                    <span><?php if( !empty($vyb['aboutus_branding_main_title']) ) echo $vyb['aboutus_branding_main_title']; ?></span>
                </div>

                <div class="drop">
                        <?php
                            $drop_brand = $vyb['aboutus_branding'];
                                        if( !empty($drop_brand) ) {?>                   
                        <?php foreach ( $drop_brand as $key => $value ) { ?>
                                <div class="drop-img" style="background-image: url(<?php echo $value['aboutus_branding_img']['url'];?>);">
                                    <div class="title"><span><?php echo $value['aboutus_branding_title'];?></span></div>
                                </div>
                            <?php } ?>              
                        <?php } ?>
                </div>
            </div>

            <div class="drop-item drop-item-b a-fade" data-q="1.0s">
                <div class="drop-btn">
                    <span><?php if( !empty($vyb['aboutus_applications_main_title']) ) echo $vyb['aboutus_applications_main_title']; ?></span>
                </div>

                <div class="drop">
                    <?php
                        $drop_app = $vyb['aboutus_applications'];
                                    if( !empty($drop_app) ) {?>                   
                    <?php foreach ( $drop_app as $key => $value ) { ?>
                            <div class="drop-img" style="background-image: url(<?php echo $value['aboutus_applications_img']['url'];?>);">
                                <div class="title"><span><?php echo $value['aboutus_applications_title'];?></span></div>
                            </div>
                        <?php } ?>              
                    <?php } ?>
                </div>
            </div>

            <div class="drop-item drop-item-b a-fade" data-q="1.2s">
                <div class="drop-btn">
                    <span><?php if( !empty($vyb['aboutus_advertising_main_title']) ) echo $vyb['aboutus_advertising_main_title']; ?></span>
                </div>

                <div class="drop">
                    <?php
                        $drop_ad = $vyb['aboutus_advertising'];
                                    if( !empty($drop_ad) ) {?>                   
                    <?php foreach ( $drop_ad as $key => $value ) { ?>
                            <div class="drop-img" style="background-image: url(<?php echo $value['aboutus_advertising_img']['url'];?>);">
                                <div class="title"><span><?php echo $value['aboutus_advertising_title'];?></span></div>
                            </div>
                        <?php } ?>              
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>

    <div class="process animate-item a-fade" data-q="0.3s">
        <div class="title title-animate"><?php if( !empty($vyb['work_process_main_title']) ) echo $vyb['work_process_main_title']; ?></div>

        <div class="cols">
            <?php 
            $data_transition = 0.3;
            $data_transition_s = 0.6;
                $work = $vyb['work_process_m'];
                    if( !empty($work) ) {?>                   
                <?php foreach ( $work as $key => $value ) { ?>
                    <div class="process-item a-fade" data-q="<?php echo $data_transition;$data_transition+=0.6;?>s">
                        <div class="text-it title-animate">
                            <?php echo $value['work_process_text'];?>
                        </div>
                        <i class="a-fade" data-q="0.6s"><?php echo $value['work_process_num'];?></i>
                    </div>
                <?php } ?>              
            <?php } ?>
        </div>
    </div>

    <div class="defines animate-item" data-screen="0.8">
        <div class="a-fade smoke-wrap" data-q="1.0s">
            <div class="smoke smoke-fly">
                <img src="<?php echo get_template_directory_uri(); ?>/images/smoke-3.png" alt="">
            </div>
        </div>
        <div class="cols">
            <div class="title title-animate a-fade" data-q="0.4s">
                what defines vyb
            </div>
            <div class="text-it a-fade" data-q="0.7s">
                Quality is not an act, it’s a habit”
            </div>
        </div>
        <div class="text-v a-fade" data-q="0.8s">— aristotle</div>
    </div>

    <div class="service-wrap animate-item cols a-fade" data-q="0.4s">
        <?php 
            $data_transition_last = 0.8;
            $defines = $vyb['work_defines_m'];
                if( !empty($defines) ) {?>                   
            <?php foreach ( $defines as $key => $value ) { ?>
                <div class="service-item">
                    <div class="service-text">
                        <div class="a-fade"  data-q="<?php echo $data_transition_last;$data_transition_last+=0.4;?>s">
                            <div class="title"><?php echo $value['work_defines_title'];?></div>
                            <ul class="points">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <p>
                                <?php echo $value['work_defines_text'];?>                                
                            </p>
                        </div>
                    </div>
                </div>
            <?php } ?>              
        <?php } ?>
    </div>
</div>

<?php get_footer(); ?>
