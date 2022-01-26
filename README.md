# SpiritualWorld

<!-- form theke newa Data -->
$avater = $_FILES['avater'];
$avater_name = $_FILES['avater']['name'];
$avater_size = $_FILES['avater']['size'];
$avater_type = $_FILES['avater']['type];
$avater_tmp = $_FILES['avater']['tmp'];


$avaterAllowedExtenctions = array( 'jpg', 'png','jpeg');
$avaterExtenction = strtolower( end( explore( '.', $avater_tmp  )));
$formErrors = array();

if( strlen($user_name) > 4){
    $formErrors = 'Username is too short';
}
if( $password === $re_password){
    $formErrors = 'Password Does'\t Match';
}
if( !empty( $avater_name) && !in_array( $avaterExtenction , $avaterAllowedExtenctions )){
    $formErrors = 'Please Upload a Valid Image Format';
}
if( !empty( $avater_size) && $avaterSize > AtowBytes ){
    $formError = 'Image File To Larger then 2MB';
}

foreach( $formErrors as $error){
    echo '<div class="alert alert-warning">'. $error .'</div>';
}

if( empty( $formErrors )){
    <!-- encrypted password -->
    $hasspass = sha1( $password);
    <!-- img unique name gnarate -->
    $img_unique_name = rand( 0, 200000)  . '_' .  $avater_name;
    move_uploaded_file( $avaterTmp , "img\users-avater\\" .  $img_unique_name );

    <!-- For image query fire  -->
    $query = "INSERT INTO user (Row) VALUES($values)";
    $query_fire = mysqli_query( $connect, $query);

    if( !$query_fire ){
        die( "Something Wrong" .  mysqli_error( $connect));
    }else{
        header( "Location : alluser.php?do='Manage'");
    }
}

