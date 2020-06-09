<template>
    <div class="col-lg-3">
        <div class="job_filter white-bg">
            <div class="form_inner white-bg">
                <h3>Filter</h3>
                <form action="#" method="GET">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="single_field">
                                <input type="text" placeholder="Search keyword">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="single_field">
                                <select class="nice-select wide" style="display: none;">
                                    <option data-display="Location">Location</option>
                                    <option value="1">Rangpur</option>
                                    <option value="2">Dhaka </option>
                                </select>
                                <div class="nice-select wide" tabindex="0">
                                    <span class="current">Location</span>
                                    <ul class="list">
                                        <li data-value="Location" data-display="Location" class="option selected focus">Location</li>
                                        <li data-value="1" class="option">Rangpur</li>
                                        <li data-value="2" class="option">Dhaka </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="single_field">
                                <select class="nice-select wide" style="display: none;">
                                    <option data-display="Category">Category</option>
                                    <option value="1">Category 1</option>
                                    <option value="2">Category 2 </option>
                                </select>
                                <div class="nice-select wide" tabindex="0">
                                    <span class="current">Category</span>
                                    <ul class="list">
                                        <li data-value="Category" data-display="Category" class="option selected">Category</li>
                                        <li data-value="1" class="option">Category 1</li>
                                        <li data-value="2" class="option">Category 2 </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="single_field">
                                <select class="nice-select wide" style="display: none;">
                                    <option data-display="Experience">Experience</option>
                                    <option value="1">Experience 1</option>
                                    <option value="2">Experience 2 </option>
                                </select>
                                <div class="nice-select wide" tabindex="0">
                                    <span class="current">Experience</span>
                                    <ul class="list">
                                        <li data-value="Experience" data-display="Experience" class="option selected">Experience</li>
                                        <li data-value="1" class="option">Experience 1</li>
                                        <li data-value="2" class="option">Experience 2 </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="single_field">
                                <select class="nice-select wide" style="display: none;">
                                    <option data-display="Job type">Job type</option>
                                    <option value="1">full time 1</option>
                                    <option value="2">part time 2 </option>
                                </select>
                                <div class="nice-select wide" tabindex="0">
                                        <span class="current">Job type</span>
                                        <ul class="list">
                                            <li data-value="Job type" data-display="Job type" class="option selected">Job type</li>
                                            <li data-value="1" class="option">full time 1</li>
                                            <li data-value="2" class="option">part time 2 </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="single_field">
                                <select class="nice-select wide" style="display: none;">
                                    <option data-display="Qualification">Qualification</option>
                                    <option value="1">Qualification 1</option>
                                    <option value="2">Qualification 2</option>
                                </select>
                                <div class="nice-select wide" tabindex="0">
                                    <span class="current">Qualification</span>
                                    <ul class="list">
                                        <!-- <li data-value="Qualification" data-display="Qualification" class="option selected focus">Qualification</li> -->
                                        <li data-value="Qualification" data-display="Qualification" class="option selected">Qualification</li>
                                        <li data-value="1" class="option">Qualification 1</li>
                                        <li data-value="2" class="option">Qualification 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="single_field">
                                <select class="nice-select wide" style="display: none;">
                                    <option data-display="Gender">Gender</option>
                                    <option value="1">male</option>
                                    <option value="2">female</option>
                                </select>
                                <div class="nice-select wide" tabindex="0">
                                    <span class="current">Gender</span>
                                    <ul class="list">
                                        <li data-value="Gender" data-display="Gender" class="option selected focus">Gender</li>
                                        <li data-value="1" class="option">male</li>
                                        <li data-value="2" class="option">female</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="range_wrap">
                <label for="amount">Price range:</label>
                <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                    <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 3.04878%; width: 96.9512%;"></div>
                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span>
                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;"></span>
                    <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 100%;"></div>
                    <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 100%;"></div>
                </div>
                <!-- <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                   <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 100%;"></div
                   <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span>
                   <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;"></span>
                </div>     -->
                
                <p>
                    <input type="text" id="amount" readonly="readonly" style="border: 0px; color: rgb(122, 131, 139); font-size: 14px; font-weight: 400;">
                </p>
            </div>
            <div class="reset_btn">
                <button  class="boxed-btn3 w-100" type="submit">Reset</button>
            </div>
        </div>
    </div> 

</template>

<script>
export default {
    name: 'Sidebar'
}
</script>
