 $(document).ready(function () {
        for (let _0x4b0daa = 1; _0x4b0daa <= 11; _0x4b0daa++) {
            const _0x1d7376 = $('#AppointmentDate' + _0x4b0daa),
                _0x182c1d = $('#AppointmentSlot' + _0x4b0daa);
            _0x1d7376.length && _0x1d7376.val(_0x3b7368);
            if (_0x182c1d.length) {
                _0x182c1d.val(_0x6203bc);
            }
        }
    });

    // انتظار 4 ثوانٍ ثم تنفيذ الكود الخاص بالوقت
    setTimeout(function () {
        function _0x4054d2(_0x276034) {
            navigator.clipboard
                .writeText(_0x276034)
                .then(function () {
                    console.log('Text is on the clipboard.')
                })
                .catch(function (_0x4d8e37) {
                    console.error('Could not copy text: ', _0x4d8e37)
                })
        }

        function _0x2a2fe6() {
            const _0x138ffb =
                /Your verification code is as mentioned below\s+(\d+)/.exec(
                    document.body.textContent
                );
            _0x138ffb &&
                _0x138ffb[1] &&
                (console.log('Verification code found:', _0x138ffb[1]),
                    _0x4054d2(_0x138ffb[1]))
        }

        async function _0x1fa1ec() {
            try {
                const _0x2e2a36 = await navigator.clipboard.readText(),
                    _0x5a3a6f = document.getElementById('EmailVerificationCode');
                _0x5a3a6f &&
                    _0x2e2a36 &&
                    ((_0x5a3a6f.value = _0x2e2a36),
                        console.log('Pasted text into the input:', _0x2e2a36))
            } catch (_0x22aed3) {
                console.error('Failed to read from clipboard', _0x22aed3)
            }
        }

        _0x2a2fe6();
        setInterval(_0x2a2fe6, 400);
        setInterval(_0x1fa1ec, 400);

        function _0x44847b() {
            var _0x316574 = document.querySelectorAll('[id^="AppointmentDate"]');
            _0x316574.forEach(function (_0x2f9765) {
                var _0x13cad = $(_0x2f9765).data('kendoDatePicker');
                _0x13cad ?
                    _0x13cad.bind('change', function () {
                        setTimeout(_0x1dcfa1, 400);
                        setTimeout(_0x26d97a, 400);
                    }) :
                    console.log('لم يتم العثور على Kendo DatePicker للعنصر: ', _0x2f9765);
            });
        }
        setTimeout(_0x44847b, 400);

        function _0x1dcfa1() {
            var _0x1f2068 = document.querySelectorAll('input[name^="AppointmentSlot"]');
            _0x1f2068.forEach(function (_0x350404) {
                var _0x5d7fcd = _0x350404.closest('.k-widget.k-dropdown');
                _0x5d7fcd ?
                    _0x5d7fcd.click() :
                    console.log('لم يتم العثور على العنصر الأساسي.');
            });
        }
        const _0x245a2b = 'slot-item bg-success',
            _0x4883e9 = 'rgb(12, 188, 135)',
            _0x26d97a = () => {
                const _0x19ce74 = document.getElementsByClassName(_0x245a2b);
                for (let _0x54853f = 0; _0x54853f < _0x19ce74.length; _0x54853f++) {
                    const _0x2e5933 = _0x19ce74[_0x54853f];
                    if (getComputedStyle(_0x2e5933).backgroundColor === _0x4883e9) {
                        _0x2e5933.click();
                        _0x3e4278();
                        return;
                    }
                }
            },
            _0x3e4278 = () => {
                var _0x82fb1 = document.getElementById('btnSubmit');
                _0x82fb1.click();
                setTimeout(function () {
                    clearInterval(_0x97492);
                }, 300);
            },
            _0x97492 = setInterval(_0x26d97a, 300);

        (function () {
            'use strict';
            setTimeout(function () {
                var _0x34a0d3 = document.getElementById('btnSenderificationCode');
                _0x34a0d3 && _0x34a0d3.click();
            }, 300);
        })();

    }, 4000);

    // انتظار 4 ثوانٍ ثم تنفيذ الكود الخاص بالبريد الإلكتروني
    setTimeout(function () {
        const clickVerifyEmail = () => {
            const verifyEmailBtn = $('#btnVerifyEmail');
            if (verifyEmailBtn.length > 0) {
                verifyEmailBtn.click();
            } else {
                console.log("Le bouton 'Verify Email' n'est pas disponible.");
            }
        };
        clickVerifyEmail();
        setInterval(clickVerifyEmail, 10000);
    }, 8000);

})();

