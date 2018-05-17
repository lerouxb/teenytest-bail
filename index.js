'use strict';

const Minimist = require('minimist');

let failed = false;

module.exports = function () {

    const argv = Minimist(process.argv.slice(2));

    return {
        name: 'teenytest-bail',
        supervisors: {
            userFunction: function (runUserFunction, metadata, cb) {

                if (!argv.bail) {
                    return runUserFunction(cb);
                }

                if (failed) {
                    if (metadata.subType === 'test') {
                        console.log('# skip', metadata.description);
                    }
                    return cb();
                }

                runUserFunction((err, result) => {

                    if (err) {
                        failed = true;
                    }
                    cb(err, result);
                });
            }
        }
    };
};
