<template>
    <video id="myVideo" class="video-js vjs-default-skin" playsinline></video>
</template>

<script>
    /* eslint-disable */
    import 'video.js/dist/video-js.css'
    import 'videojs-record/dist/css/videojs.record.css'
    import videojs from 'video.js'
    import 'webrtc-adapter'
    import RecordRTC from 'recordrtc'

    import firebase from 'firebase';

    import Record from 'videojs-record/dist/videojs.record.js'
    export default {
        data() {
            return {
                player: '',
                options: {
                    controls: true,
                    autoplay: false,
                    fluid: false,
                    loop: false,
                    width: 320,
                    height: 240,
                    bigPlayButton: true,
                    controlBar: {
                        volumePanel: true
                    },
                    plugins: {
                     
                        // configure videojs-record plugin
                        record: {
                            audio: true,
                            video: true,
                            debug: true
                        }
                    }
                }
            };
        },
        mounted() {
            /* eslint-disable no-console */
            // apply some workarounds for opera browser
            //applyVideoWorkaround();
            this.player = videojs('#myVideo', this.options, () => {
                // print version information at startup
                var msg = 'Using video.js ' + videojs.VERSION +
                    ' with videojs-record ' + videojs.getPluginVersion('record') +
                    ' and recordrtc ' + RecordRTC.version;
                videojs.log(msg);
            });
            // device is ready
            this.player.on('deviceReady', () => {
                console.log('device is ready!');
            });
            // user clicked the record button and started recording
            this.player.on('startRecord', () => {
                console.log('started recording!');
            });
            // user completed recording and stream is available
            this.player.on('finishRecord', () => {
                // the blob object contains the recorded data that
                // can be downloaded by the user, stored on server etc.
                console.log('finished recording: ', this.player.recordedData);
                // show save as dialog
             //   this.player.record().saveAs({'video': 'recorded-video.webm'});


//             // Create a root reference
// var storageRef = firebase.storage().ref();

//const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.player.recordedData);


firebase.storage().ref('recorded-video2.webm').put(this.player.recordedData).then(function(snapshot) {
 console.log('Uploaded a blob or file!');
 });

// // Create a reference to 'mountains.jpg'
// var mountainsRef = storageRef.child('mountains.jpg');




// // Create a reference to 'images/mountains.jpg'
// var mountainImagesRef = storageRef.child('images/mountains.jpg');

// var file = ... // use the Blob or File API
// ref.put(file).then(function(snapshot) {
//   console.log('Uploaded a blob or file!');
// });


            });           
            // error handling
            this.player.on('error', (element, error) => {
                console.warn(error);
            });
            this.player.on('deviceError', () => {
                console.error('device error:', this.player.deviceErrorCode);
            });
        },
        beforeDestroy() { 
            if (this.player) {
                this.player.dispose();
            }
        }
    }
</script>